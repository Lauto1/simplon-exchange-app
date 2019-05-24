import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import BugScreen from "../screens/BugScreen";
import FaqScreen from "../screens/FaqScreen";
import VoteScreen from "../screens/VoteScreen";
import GraphStack from "./stack/GraphStack";
import HomeStack from "./stack/HomeStack";
import LoginStack from "./stack/LoginStack";
import RegisterStack from "./stack/RegisterStack";
import StatsStack from "./stack/StatsStack";
import ContactScreen from "../screens/ContactScreen";
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
  Graphiques: GraphStack,
  Vote: VoteScreen,
  Contact: ContactScreen
},{
  drawerPosition: 'right',
});

/**
 * Le root navigator regroupe toute les stack et les navigators
 */
const RootStack = createStackNavigator(
  {
    Main: DrawerNavigator,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions:{
      gesturesEnabled: false,
    },
  
  }
)

const Navigator = createAppContainer(RootStack);



export default Navigator;
