import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 
import { 
    Container,
    ButtonMenu
  } from './styles';

export default function Header() {
    const navigation = useNavigation();
    return(
        <Container>
            <ButtonMenu onPress={ ()=> navigation.toggleDrawer() }>
                <MaterialCommunityIcons name="menu" size={24} color="white" />
            </ButtonMenu>
        </Container>
    )
}

