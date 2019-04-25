import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import HomeScreen from '../../screens/HomeScreen';

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const HomeStack = createStackNavigator({        
  	Home: HomeScreen 
});
/**
 * Nom du label affiché dans le menu
 */
HomeStack.navigationOptions = {
    tabBarLabel: 'Home'
};
export default HomeStack; 