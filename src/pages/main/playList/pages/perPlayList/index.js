/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {PlayListItem} from './components/PlayListItem';
import {getPlayList} from '@/api/playList';

const renderItem = ({item}) => {
  return <PlayListItem info={item} />;
};
const columnWrapperStyle = {
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 12,
  paddingBottom: 12,
  justifyContent: 'space-between',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const PerPlayList = (props) => {
  const {route} = props;
  const [data, setData] = useState([]);
  const _getPlayList = async () => {
    const res = await getPlayList({order: 'new', limit: '10', cat: route.name});
    setData(res.playlists);
  };
  useEffect(() => {
    _getPlayList();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        renderItem={renderItem}
        data={data}
        columnWrapperStyle={columnWrapperStyle}
      />
    </View>
  );
};
export default PerPlayList;
