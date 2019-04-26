import React from 'react';
import { createStackNavigator, createBottomTabNavigator,createAppContainer,createDrawerNavigator } from 'react-navigation';
import HomeStack from './stack/HomeStack';
const DrawerNavigator = createDrawerNavigator({
        Accueil: HomeStack,
    }
); 
   
const RootStack = createStackNavigator({
        Main: DrawerNavigator,
        Home:HomeStack
    }, {
        mode: 'modal',
        headerMode: 'none',
    }
)
const Navigator = createAppContainer(RootStack);

export default Navigator;  