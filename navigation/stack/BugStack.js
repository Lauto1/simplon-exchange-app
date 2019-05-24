import { createStackNavigator } from "react-navigation";
import BugScreen from "../../screens/BugScreen";

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const BugStack = createStackNavigator({
  Main: BugScreen
});
/**
 * Nom du label affiché dans le menu
 */
BugStack.navigationOptions = {
  tabBarLabel: "Signaler un bug"
};
export default BugStack;
