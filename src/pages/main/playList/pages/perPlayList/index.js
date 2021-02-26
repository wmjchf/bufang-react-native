/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style';
import {PlayListItem} from './components/PlayListItem';
import {getPlayList} from '@/api/playList';
import {ListFooter} from '@/components/ListFooter';

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
      const res = await getPlayList(rerquestOption);
      setIsLoading(false);
      setData(data.concat(res.playlists));
      setMore(res.more);
    }
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
  // 刚开始进来时获取数据
  useEffect(() => {
    _getPlayList();
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
