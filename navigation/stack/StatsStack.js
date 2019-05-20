import { createStackNavigator } from "react-navigation";
import StatistiquesScreen from "../../screens/StatistiquesScreen";
import HeaderComponent from "../../components/layouts/HeaderComponent";

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const StatsStack = createStackNavigator({
  Stats: StatistiquesScreen
});
/**
 * Nom du label affiché dans le menu
 */
StatsStack.navigationOptions = {
  tabBarLabel: "Statistiques",
};
export default StatsStack;
