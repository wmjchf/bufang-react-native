import React, {useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Toast from 'react-native-easy-toast';
import {initGlobal} from '@/store/reducer/global/action';
import {Loading} from '@/components/Loading';
import Splash from './pages/splash';
import Home from './pages/home';
import Main from './pages/main';
import Audio from './pages/audio';
import Login from './pages/login';
import Code from './pages/smsCode';
import RssDetail from './pages/rssDetail';

const Stack = createStackNavigator();

const App = (porps) => {
  porps.initGlobal();
  const toast = useRef(null);
  const loading = useRef(null);
  useEffect(() => {
    global.toast = toast.current;
    global.loading = loading.current;
  }, []);
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
      <Toast ref={toast} />
      <Loading ref={loading} />
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="splash">
          <Stack.Screen
            name="splash"
            component={Splash}
            // options={mainHeaderOption}
          />
          <Stack.Screen
            name="login"
            component={Login}
            // options={mainHeaderOption}
          />
          <Stack.Screen
            name="code"
            component={Code}
            // options={mainHeaderOption}
          />
          <Stack.Screen
            name="home"
            component={Home}
            // options={mainHeaderOption}
          />
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
          <Stack.Screen
            name="rssDetail"
            component={RssDetail}
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
