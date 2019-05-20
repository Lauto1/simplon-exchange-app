import React from 'react';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from '../../screens/HomeScreen';
import QuestionScreen from '../../screens/QuestionScreen';
import FaqScreen from '../../screens/FaqScreen';
import BugScreen from '../../screens/BugScreen';

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Question: QuestionScreen,
  Faq: FaqScreen,
  Bug: BugScreen
});
/**
 * Nom du label affiché dans le menu
 */
HomeStack.navigationOptions = {
    tabBarLabel: 'Accueil'
};
export default HomeStack;
