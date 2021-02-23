import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/pages/main';

const Stack = createStackNavigator();

const App = () => {
  const mainHeaderOption = {
    title: '不方科技',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={mainHeaderOption} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
