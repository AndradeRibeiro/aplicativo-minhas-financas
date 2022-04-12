import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { 
    Container,
    Type,
    IconView,
    TypeText,
    ValueText
  } from './styles';

export default function HistoricalList({ data, deleteItem }) {

    return(
        <TouchableWithoutFeedback onLongPress={ () => deleteItem(data)}>
            <Container>
                <Type>
                    <IconView tipo={data.tipo}>
                        <MaterialCommunityIcons 
                            name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                            size={24} 
                            color="white" 
                        />
                        
                        <TypeText>{data.tipo}</TypeText>
                    </IconView>
                </Type>

                <ValueText>
                    R$ {data.valor} - {data.date}
                </ValueText>
            </Container>
        </TouchableWithoutFeedback>
       
    );
}