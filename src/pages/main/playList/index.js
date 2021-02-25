import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {connect} from 'react-redux';
import PerPlayList from './pages/perPlayList';
import {getPlayListCategory} from '@/api/playList';
import {handleTagsData} from './utils';

const Tab = createMaterialTopTabNavigator();

const PlayList = (props) => {
  const [playList, setPlayList] = useState([]);

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

  const _getPlayListCategory = async () => {
    const res = await getPlayListCategory();
    const tags = handleTagsData(res.tags);
    setPlayList(tags);
  };

  const generateTab = () => {
    return playList.map((item) => {
      return (
        <Tab.Screen key={item.id} name={item.name} component={PerPlayList} />
      );
    });
  };

  useEffect(() => {
    _getPlayListCategory();
  }, []);
  return (
    playList.length > 0 && (
      <Tab.Navigator tabBarOptions={tabBarOptions} lazy={true}>
        {generateTab()}
      </Tab.Navigator>
    )
  );
};

const stateMapToProp = (state) => {
  return {
    theme: state.theme,
  };
};
export default connect(stateMapToProp)(PlayList);
