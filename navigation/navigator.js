import React from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import HomeStack from './stack/HomeStack';
import RegisterStack from "./stack/RegisterStack";
import LoginStack from './stack/LoginStack';
import FaqScreen from "../screens/FaqScreen";
import BugScreen from "../screens/BugScreen";
import StatsStack from "./stack/StatsStack";
import ProfilUserScreen from "../screens/ProfilUserScreen";

// definit la connexion pour afficher ou non le profil
let mockUserAsyncStorage = true ; // A modifier à l'arrivée de l'api


/**
 * Creation d'un Drawer navigator a partir des stacks  https://reactnavigation.org/docs/en/drawer-navigator.html
 * Vous pouvez ajouter votre stack ici pour afficher votre page dans le menu drawer
 * ex : Home: HomeStack, Faq:FaqStack
 */
const DrawerNavigator = createDrawerNavigator({
    Accueil: HomeStack,
    Inscription: RegisterStack,
    Connexion: LoginStack,
    Faq: FaqScreen,
    Bug: BugScreen,
    Statistiques: StatsStack,
    Profil: {screen: ProfilUserScreen, navigationOptions: {drawerLabel: ()=> mockUserAsyncStorage? "Profil" : null}}, 
  }
);

/**
 * Le root navigator regroupe toute les stack et les navigators
 */
const RootStack = createStackNavigator({
    Main: DrawerNavigator,
    Home: HomeStack
  }, {
    mode: 'modal',
    headerMode: 'none',
  }
);
const Navigator = createAppContainer(RootStack);

export default Navigator;
