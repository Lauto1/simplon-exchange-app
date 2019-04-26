import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import HomeScreen from '../../screens/HomeScreen';
import FaqScreen from '../../screens/FaqScreen';
import BugScreen from '../../screens/BugScreen';
import VoteScreen from '../../screens/VoteScreen';

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const HomeStack = createStackNavigator({
  	Home: HomeScreen,
    Faq: FaqScreen,
    Bug: BugScreen,
    Vote: VoteScreen
});
/**
 * Nom du label affiché dans le menu
 */
HomeStack.navigationOptions = {
    tabBarLabel: 'Home'
};
export default HomeStack;
