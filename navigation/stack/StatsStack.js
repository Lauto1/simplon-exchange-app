import React from 'react';
import {createStackNavigator} from 'react-navigation';
import StatistiquesScreen from "../../screens/StatistiquesScreen";

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
  tabBarLabel: 'Statistiques'
};
export default StatsStack;
