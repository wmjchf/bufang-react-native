import React, {useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
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
import ContentDetail from './pages/contentDetail';

const Stack = createStackNavigator();

const App = (porps) => {
  porps.initGlobal();
  const toast = useRef(null);
  const loading = useRef(null);
  useEffect(() => {
    global.toast = toast.current;
    global.loading = loading.current;
  }, []);
  const commonHeaderOption = {
    headerStyle: {
      backgroundColor: porps.theme.mainColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
    headerLeft: '',
    headerStyleInterpolator: HeaderStyleInterpolators.forStatic,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
  const splashDeatilHeaderOption = {
    headerShown: false,
  };
  const readHeaderOption = {
    ...commonHeaderOption,
    title: '阅读',
  };
  const contentDeatilHeaderOption = {
    title: '新闻',
    ...commonHeaderOption,
  };
  const rssDeatilHeaderOption = {
    title: '详情',
    ...commonHeaderOption,
  };
  const loginHeaderOption = {
    headerShown: false,
    headerStyleInterpolator: HeaderStyleInterpolators.forStatic,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
  const codeHeaderOption = {
    headerShown: false,
    headerStyleInterpolator: HeaderStyleInterpolators.forStatic,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
  return (
    <>
      <Toast ref={toast} />
      <Loading ref={loading} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen
            name="splash"
            component={Splash}
            options={splashDeatilHeaderOption}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={loginHeaderOption}
          />
          <Stack.Screen
            name="code"
            component={Code}
            options={codeHeaderOption}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={readHeaderOption}
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
            options={rssDeatilHeaderOption}
          />
          <Stack.Screen
            name="contentDetail"
            component={ContentDetail}
            options={contentDeatilHeaderOption}
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
