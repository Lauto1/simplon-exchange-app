import {createStackNavigator} from 'react-navigation';
import ProfilUserScreen from "../../screens/ProfilUserScreen";

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const StatsStack = createStackNavigator({
  Stats: ProfilUserScreen
});
/**
 * Nom du label affiché dans le menu
 */
StatsStack.navigationOptions = {
  tabBarLabel: 'ProfilUser'
};
export default StatsStack;
