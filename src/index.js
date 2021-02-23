import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Main from './pages/main';

const Stack = createStackNavigator();

const App = (porps) => {
  const mainHeaderOption = {
    title: '不方科技',
    headerStyle: {
      backgroundColor: porps.theme.mainColor,
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
const stateMapToProp = (state) => {
  return {
    theme: state.theme,
  };
};
export default connect(stateMapToProp)(App);
