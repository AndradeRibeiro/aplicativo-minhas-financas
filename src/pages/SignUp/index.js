import React, { useState, useContext } from 'react';
import { Platform , ActivityIndicator } from 'react-native';
import { 
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container 
        behavior={Platform.OS === 'ios' ? padding: ''}
        enabled
      >

        <AreaInput>
          <Input 
            placeholder="Nome"
            autoCorrect={false}
            autpCapitalize="none"
            value={nome}
            onChangeText={ (texto) => setNome(texto)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Email"
            autoCorrect={false}
            autpCapitalize="none"
            value={email}
            onChangeText={ (texto) => setEmail(texto)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Senha"
            secureTextEntry={true}
            autoCorrect={false}
            autpCapitalize="none"
            value={password}
            onChangeText={ (texto) => setPassword(texto)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
        {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>
                Cadastrar
              </SubmitText>
            )
          }     
        </SubmitButton>

      </Container>
    </Background>

  );
}