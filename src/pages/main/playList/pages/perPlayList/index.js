/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style';
import {PlayListItem} from './components/PlayListItem';
import {ListFooter} from '@/components/ListFooter';
import dataStore from '@/libs/dataStore';

const renderItem = ({item}) => {
  return <PlayListItem info={item} key={item.id} />;
};

const columnWrapperStyle = {
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 12,
  paddingBottom: 12,
  justifyContent: 'space-between',
};
const PerPlayList = (props) => {
  const {route} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing] = useState(false);
  let [more, setMore] = useState(true);
  let [data, setData] = useState([]);
  let [isFirst, setisFirst] = useState(true);
  const [offset, setOffset] = useState(1);
  // 请求参数
  const rerquestOption = useMemo(() => {
    return {
      order: 'new',
      limit: '10',
      cat: route.name,
      offset,
    };
  }, [route.name, offset]);
  // 获取数据
  const _getPlayList = async () => {
    if (more) {
      setIsLoading(true);
      const resultNet = await dataStore.fetchNetGetData(
        {
          url: '/top/playlist',
          type: route.name,
        },
        rerquestOption,
        (saveKey, newRes, oldRes) => {
          oldRes.playlists = oldRes.playlists.concat(newRes.playlists);
          dataStore.saveData(saveKey, oldRes);
        },
      );
      setIsLoading(false);
      resultNet && setData(data.concat(resultNet.playlists));
      resultNet && setMore(resultNet.more);
    }
  };
  // 第一次本地获取数据
  const _getPlayListLocal = async () => {
    setIsLoading(true);
    const resultLocal = await dataStore.fetchLocalData({
      url: '/top/playlist',
      type: route.name,
    });
    resultLocal && setData(data.concat(resultLocal.playlists));
    const resultNet = await dataStore.fetchNetGetData(
      {
        url: '/top/playlist',
        type: route.name,
      },
      rerquestOption,
      (saveKey, newRes) => {
        dataStore.saveData(saveKey, newRes);
      },
    );
    setIsLoading(false);
    setisFirst(false);
    resultNet && setData(resultNet.playlists);
    resultNet && setMore(resultNet.more);
  };
  const _loadData = () => {
    setOffset(offset + 10);
  };
  // 下拉刷新获取数据
  const _refresh = () => {
    setOffset(1);
    more = true;
    data = [];
  };
  // 第一次本地加载数据
  useEffect(() => {
    _getPlayListLocal();
  }, []);
  // 刚开始进来时获取数据
  useEffect(() => {
    if (!isFirst) {
      _getPlayList();
    }
  }, [rerquestOption]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        renderItem={renderItem}
        data={data}
        columnWrapperStyle={columnWrapperStyle}
        onEndReached={_loadData}
        onEndReachedThreshold={0.7}
        onRefresh={_refresh}
        refreshing={refreshing}
        ListFooterComponent={<ListFooter more={more} isLoading={isLoading} />}
      />
    </View>
  );
};
export default PerPlayList;
