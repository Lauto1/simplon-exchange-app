import { createStackNavigator } from "react-navigation";
import GraphScreen from "../../screens/GraphScreen";

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const GraphStack = createStackNavigator({
  Graph: GraphScreen
});
/**
 * Nom du label affiché dans le menu
 */
GraphStack.navigationOptions = {
  tabBarLabel: "Graphiques",
};
export default GraphStack;
