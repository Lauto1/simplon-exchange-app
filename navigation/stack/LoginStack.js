import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import LoginScreen from '../../screens/LoginScreen';

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const LoginStack = createStackNavigator({
    Login: LoginScreen
});
/**
 * Nom du label affiché dans le menu
 */
LoginStack.navigationOptions = {
    tabBarLabel: 'Login'
};
export default LoginStack;