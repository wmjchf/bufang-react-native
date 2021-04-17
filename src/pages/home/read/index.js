import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Follow from './pages/follow/index.js';
import Recommend from './pages/recommend/index.js';
import {Nav} from '@/components/Nav';
import commonStyle from '@/style/common';

const Tab = createMaterialTopTabNavigator();

const Read = (props) => {
  const theme = useSelector((state) => state.theme);
  const tabBarOptions = {
    activeTintColor: theme.mainColor,
    inactiveTintColor: theme.unSelectTabColor,
    tabStyle: {
      // shadowColor: 'white',
    },
    indicatorStyle: {
      backgroundColor: theme.mainColor,
      marginLeft: 50,
      width: 100,
    },
    style: {
      // marginLeft: 50,
      // marginRight: 50,
      // shadowColor: 'white',
      shadowColor: 'black',
      shadowOpacity: 0, //修改的地方
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
    // renderIndicator: () => {
    //   return <View style={styles.indicatorStyle} />;
    // },
  };
  const tabBarData = [
    {
      id: 1,
      name: '关注',
      component: Follow,
    },
    {
      id: 2,
      name: '推荐',
      component: Recommend,
    },
  ];

  const generateTab = () => {
    return tabBarData.map((item) => {
      return (
        <Tab.Screen key={item.id} name={item.name} component={item.component} />
      );
    });
  };

  return (
    <>
      <Nav title="阅读" />
      <Tab.Navigator tabBarOptions={tabBarOptions} lazy={true}>
        {generateTab()}
      </Tab.Navigator>
    </>
  );
};
export default Read;
