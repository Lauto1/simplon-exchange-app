import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../../screens/HomeScreen';
import QuestionScreen from '../../screens/QuestionScreen';
/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Question: QuestionScreen
});
/**
 * Nom du label affiché dans le menu
 */
HomeStack.navigationOptions = {
    tabBarLabel: 'Accueil'
};
export default HomeStack; 