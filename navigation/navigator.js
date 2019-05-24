import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import FaqScreen from "../screens/FaqScreen";
import BugStack from "./stack/BugStack";
import HomeStack from "./stack/HomeStack";
import LoginStack from "./stack/LoginStack";
import ProfilUserStack from "./stack/ProfilUserStack";
import RegisterStack from "./stack/RegisterStack";
import StatsStack from "./stack/StatsStack";

// definit la connexion pour afficher ou non le profil
let mockUserAsyncStorage = true; // A modifier à l'arrivée de l'api

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
  Bug: BugStack,
  Statistiques: StatsStack,
  Profil: {
    screen: ProfilUserStack,
    navigationOptions: {
      drawerLabel: () => (mockUserAsyncStorage ? "Profil" : null)
    }
  }
});

/**
 * Le root navigator regroupe toute les stack et les navigators
 */
const RootStack = createStackNavigator(
  {
    Main: DrawerNavigator,
    Home: HomeStack
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
const Navigator = createAppContainer(RootStack);

export default Navigator;
