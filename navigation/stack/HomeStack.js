import { createStackNavigator } from "react-navigation";
import BugScreen from "../../screens/BugScreen";
import FaqScreen from "../../screens/FaqScreen";
import HomeScreen from "../../screens/HomeScreen";
import QuestionScreen from "../../screens/QuestionScreen";
import VoteScreen from "../../screens/VoteScreen";

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Question: QuestionScreen,
  Faq: FaqScreen,
  Bug: BugScreen,
  Vote: VoteScreen
});
/**
 * Nom du label affiché dans le menu
 */
HomeStack.navigationOptions = {
    tabBarLabel: 'Accueil',
    drawerLabel: 'Accueil'
};

export default HomeStack;
