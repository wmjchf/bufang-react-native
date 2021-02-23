import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PerPlayList from './pages/perPlayList';
import {getPlayListCategory} from '../../../api/playList';
import {handleTagsData} from './utils';

const Tab = createMaterialTopTabNavigator();

const PlayList = () => {
  const [playList, setPlayList] = useState([]);
  useEffect(() => {
    getPlayListCategory().then((res) => {
      const tags = handleTagsData(res.tags);
      setPlayList(tags);
    });
  }, []);
  return (
    playList.length > 0 && (
      <Tab.Navigator>
        {playList.map((item) => {
          return <Tab.Screen name={item.name} component={PerPlayList} />;
        })}
      </Tab.Navigator>
    )
  );
};
export default PlayList;
