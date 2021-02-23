/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './home';
import About from './about';
import Habit from './habit';
import Person from './person';

const TabNav = createBottomTabNavigator();

const MainApp = () => {
  const navigatorOptions = {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  };
  const homeOptions = {
    tabBarIcon: ({focused, color, size}) => {
      // console.log(focused, color, size, 'dddd');
      return <Icon name="book" size={20} color={color} />;
    },
  };
  const aboutOptions = {
    tabBarIcon: ({focused, color, size}) => {
      return <Icon name="flag" size={20} color={color} />;
    },
  };
  const habitOptions = {
    tabBarIcon: ({focused, color, size}) => {
      return <Icon name="football-outline" size={20} color={color} />;
    },
  };
  const persionOptions = {
    tabBarIcon: ({focused, color, size}) => {
      return <Icon name="game-controller-sharp" size={20} color={color} />;
    },
  };
  return (
    <TabNav.Navigator tabBarOptions={navigatorOptions}>
      <TabNav.Screen name="home" component={Home} options={homeOptions} />
      <TabNav.Screen name="about" component={About} options={aboutOptions} />
      <TabNav.Screen name="habit" component={Habit} options={habitOptions} />
      <TabNav.Screen
        name="person"
        component={Person}
        options={persionOptions}
      />
    </TabNav.Navigator>
  );
};
export default MainApp;
