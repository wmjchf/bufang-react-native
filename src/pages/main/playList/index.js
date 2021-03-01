import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {connect} from 'react-redux';
import {getCategoryListData} from '@/store/reducer/categoryList/action';
import PerPlayList from './pages/perPlayList';
import {Nav} from './components/nav';

const Tab = createMaterialTopTabNavigator();

const PlayList = (props) => {
  const tabBarOptions = {
    scrollEnabled: true,
    activeTintColor: props.theme.mainColor,
    inactiveTintColor: props.theme.unSelectTabColor,
    tabStyle: {
      width: 100,
    },
    indicatorStyle: {
      backgroundColor: props.theme.mainColor,
    },
  };

  const generateTab = () => {
    return props.categoryList.dataList.map((item) => {
      return (
        <Tab.Screen key={item.id} name={item.name} component={PerPlayList} />
      );
    });
  };

  useEffect(() => {
    props.getCategoryListData();
  }, []);

  return (
    <>
      <Nav />
      {props.categoryList.dataList.length > 0 && (
        <Tab.Navigator tabBarOptions={tabBarOptions} lazy={true}>
          {generateTab()}
        </Tab.Navigator>
      )}
    </>
  );
};

const stateMapToProp = (state) => {
  return {
    theme: state.theme,
    categoryList: state.categoryList,
  };
};
const actionMapToProp = {getCategoryListData};
export default connect(stateMapToProp, actionMapToProp)(PlayList);
