import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import RegisterScreen from '../../screens/RegisterScreen';

/**
 * Creation d'un Stack Navigator à partir d'un Screen https://reactnavigation.org/docs/en/stack-navigator.html
 */
const RegisterStack = createStackNavigator({
    Register: RegisterScreen
});
/**
 * Nom du label affiché dans le menu
 */
RegisterStack.navigationOptions = {
    tabBarLabel: 'Register'
};
export default RegisterStack;
