import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return(
        <AppDrawer.Navigator 
            screenOptions={{
                drawerActiveTintColor: '#FFF',
                drawerActiveBackgroundColor: '#00b94a'
            }}
        >
            <AppDrawer.Screen 
                options={{
                    headerShown: false
                }}
                name="Home" 
                component={Home}
            />

            <AppDrawer.Screen 
                options={{
                    headerShown: false
                }}
                name="Registrar" 
                component={New}
            />

            <AppDrawer.Screen 
                options={{
                    headerShown: false
                }}
                name="Perfil" 
                component={Profile}
            />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;
