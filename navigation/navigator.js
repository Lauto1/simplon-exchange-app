import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import BugScreen from "../screens/BugScreen";
import FaqScreen from "../screens/FaqScreen";
import VoteScreen from "../screens/VoteScreen";
import AskQuestionScreen from "../screens/AskQuestionScreen";

import GraphStack from "./stack/GraphStack";
import HomeStack from "./stack/HomeStack";
import LoginStack from "./stack/LoginStack";
import RegisterStack from "./stack/RegisterStack";
import StatsStack from "./stack/StatsStack";
/**
 * Creation d'un Drawer navigator a partir des stacks  https://reactnavigation.org/docs/en/drawer-navigator.html
 * Vous pouvez ajouter votre stack ici pour afficher votre page dans le menu drawer
 * ex : Home: HomeStack, Faq:FaqStack
 */
/**
 * removed page grap bug Graphiques: GraphStack,
 */
const DrawerNavigator = createDrawerNavigator({
    Home: HomeStack,
    Inscription: RegisterStack,
    Connexion: LoginStack,
    askQuestion:AskQuestionScreen,
    Faq: FaqScreen,
    Bug: BugScreen,
    Statistiques: StatsStack,
    Graphiques: GraphStack,
    Vote: VoteScreen
  }
);

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
