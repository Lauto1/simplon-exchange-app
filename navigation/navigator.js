import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import BugScreen from "../screens/BugScreen";
import FaqScreen from "../screens/FaqScreen";
import HomeStack from "./stack/HomeStack";
import LoginStack from "./stack/LoginStack";
import RegisterStack from "./stack/RegisterStack";
import StatsStack from "./stack/StatsStack";

// definit la connexion
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
  // Profil: {screen: ProfileScreen, navigationOptions: {drawerLabel: ()=> mockUserAsyncStorage? "Faq" : null}}, 
  Bug: BugScreen,
  Statistiques: StatsStack,
});


/**
 * Le root navigator regroupe toute les stack et les navigators
 */
const RootStack = createStackNavigator(
  {
    Main: DrawerNavigator
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
const Navigator = createAppContainer(RootStack);

export default Navigator;
