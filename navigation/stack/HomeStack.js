import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../../screens/HomeScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen
});
HomeStack.navigationOptions = {
    tabBarLabel: 'Home'
};
export default HomeStack; 