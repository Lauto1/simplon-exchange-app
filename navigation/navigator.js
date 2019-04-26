import React from 'react';
import { createStackNavigator, createBottomTabNavigator,createAppContainer,createDrawerNavigator } from 'react-navigation';
import HomeStack from './stack/HomeStack';
/**
 * Creation d'un Drawer navigator a partir des stacks  https://reactnavigation.org/docs/en/drawer-navigator.html
 * Vous pouvez ajouter votre stack ici pour afficher votre page dans le menu drawer
 * ex : Home: HomeStack, Faq:FaqStack
 */
const DrawerNavigator = createDrawerNavigator({
        Accueil: HomeStack,
    }
); 
   
/**
 * Le root navigator regroupe toute les stack et les navigators
 */
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
