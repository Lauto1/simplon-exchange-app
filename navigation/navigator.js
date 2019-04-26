import React from 'react';
import { createStackNavigator, createBottomTabNavigator,createAppContainer,createDrawerNavigator } from 'react-navigation';

import HomeStack from './stack/HomeStack';
import FaqScreen from "../screens/FaqScreen";
import BugScreen from "../screens/BugScreen";
/**
 * Creation d'un Drawer navigator a partir des stacks  https://reactnavigation.org/docs/en/drawer-navigator.html
 * Vous pouvez ajouter votre stack ici pour afficher votre page dans le menu drawer
 * ex : Home: HomeStack, Faq:FaqStack
 */
const DrawerNavigator = createDrawerNavigator({
        Home: HomeStack,
        Bug: BugScreen,
        Faq: FaqScreen,
        Vote: VoteScreen
    }
);

/**
 * Le root navigator regroupe toute les stack et les navigators
 */
const RootStack = createStackNavigator({
        Main: DrawerNavigator,
    }, {
        mode: 'modal',
        headerMode: 'none',
    }
)
const Navigator = createAppContainer(RootStack);

export default Navigator;
