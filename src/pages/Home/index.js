import React, { useContext, useEffect, useState  } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricalList from '../../components/HistoricalList';
import firebase from '../../services/firebaseConnection';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { 
  Background,
  Container,
  Name,
  Balance,
  Title,
  List,
  AreaTitle,
  TextWithoutList,
  AreaWithoutList
} from './styles';

export default function Home() {

  const [historical, setHistorical] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {

    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date')
      .limitToLast(10).on('value', (snapshot) => {
        setHistorical([]);

        snapshot.forEach((item) => {
          let data = {
            key: item.key,
            tipo: item.val().tipo,
            valor: item.val().valor,
            date: item.val().date,
          }

          setHistorical(oldArray => [...oldArray, data]);
        })
      })
    }

    loadList();

  }, []);

  function handleDelete(data) {

    Alert.alert(
      'Atenção!',
      `Você deseja excluir ${data.tipo} - Valor: ${data.valor} ?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    );
  }

  async function handleDeleteSuccess(data) {
    await firebase.database().ref('historico')
    .child(uid).child(data.key).remove()
    .then(async() => {
      let saldoAtual = saldo;

      data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldo -= parseFloat(data.valor);
    
      await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual);
    })
    .catch((error) => {
      alert('Desculpa, ocorreu um erro');
      console.log('Log:', error);
    });
  }

  return (
    <Background>
      <Header />

      <Container>
        <Name>{user && user.nome}</Name>
        <Balance>{saldo.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Balance>
      </Container>

      <AreaTitle>     
        <MaterialCommunityIcons name="bank" size={24} color="white" />
        <Title> Histórico de Movimentações </Title>     
      </AreaTitle>
      
      {historical && historical.length > 0 ? (
        <List
          showsVerticalScrollIndicator={false} 
          data={historical}
          keyExtractor={item => item.key}
          renderItem={ ({ item }) => ( 
            <HistoricalList data={item} deleteItem={handleDelete} /> 
          )}
        />
      ) : (
        <AreaWithoutList>
          <TextWithoutList>
            Sem registros!
          </TextWithoutList>
        </AreaWithoutList>
      )}
    </Background>
  );
}