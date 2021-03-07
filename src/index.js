import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {initGlobal} from '@/store/reducer/global/action';
import Main from './pages/main';
import Audio from './pages/audio';

const Stack = createStackNavigator();

const App = (porps) => {
  porps.initGlobal();
  // const mainHeaderOption = {
  //   title: '不方科技',
  //   headerStyle: {
  //     backgroundColor: porps.theme.mainColor,
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="main">
          <Stack.Screen
            name="main"
            component={Main}
            // options={mainHeaderOption}
          />
          <Stack.Screen
            name="audio"
            component={Audio}
            // options={mainHeaderOption}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
const stateMapToProp = (state) => {
  return {
    theme: state.theme,
  };
};
const actionMapToProp = {
  initGlobal,
};
export default connect(stateMapToProp, actionMapToProp)(App);
