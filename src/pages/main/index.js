import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const TabNav = createBottomTabNavigator();

const MainApp = (props) => {
  // tabbar配置
  const tabbar = props.tabbar;
  const navigatorOptions = {
    activeTintColor: props.theme.mainColor,
    inactiveTintColor: 'gray',
  };
  // 生成tabbar
  const generateTabbar = (tabbarItem) => {
    const options = {
      tabBarIcon: ({focused, color, size}) => {
        return <Icon name={tabbarItem.icon} size={20} color={color} />;
      },
      title: tabbarItem.title,
    };
    return (
      <TabNav.Screen
        key={tabbarItem.name}
        name={tabbarItem.name}
        component={tabbarItem.component}
        options={options}
      />
    );
  };
  return (
    <TabNav.Navigator tabBarOptions={navigatorOptions}>
      {tabbar.map((tabbarItem) => {
        return generateTabbar(tabbarItem);
      })}
    </TabNav.Navigator>
  );
};
const stateMapToProp = (state) => {
  return {
    tabbar: state.tabbar,
    theme: state.theme,
  };
};
export default connect(stateMapToProp)(MainApp);
