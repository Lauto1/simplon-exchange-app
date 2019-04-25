import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../../screens/HomeScreen';
import QuestionScreen from '../../screens/QuestionScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Question: QuestionScreen
});
HomeStack.navigationOptions = {
    tabBarLabel: 'Accueil'
};
export default HomeStack; 