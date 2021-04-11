import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {
//   Menu,
//   MenuTrigger,
//   MenuOptions,
//   MenuOption,
// } from 'react-native-popup-menu';
import {getRssFollowListData} from '@/store/reducer/rssFollowList/action';
import {RssItem} from '../components/RssItem';
import {ListFooter} from '@/components/ListFooter';
import StorageUtil from '@/libs/storage';

const renderItem = ({item}) => {
  return <RssItem info={item} key={item.rssId} isFollow={true} />;
};
const Follow = () => {
  // StorageUtil.clear();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing] = useState(false);
  let [more, setMore] = useState(true);
  const {dataList, pageNum, size, total} = useSelector((state) => {
    return state.rssFollowList;
  });
  useEffect(() => {
    StorageUtil.get('bufUserId').then((bufUserId) => {
      dispatch(getRssFollowListData({pageSize: size, pageNum, bufUserId}));
    });
  }, []);
  const _loadData = () => {
    if (pageNum * size > total) {
      console.log('没有更多了');
    } else {
      dispatch(getRssFollowListData({pageSize: size, pageNum}));
    }
  };
  const _refresh = () => {
    dispatch(getRssFollowListData({pageSize: size, pageNum: 1}));
  };

  return (
    <View>
      <FlatList
        renderItem={renderItem}
        data={dataList}
        onEndReached={_loadData}
        onEndReachedThreshold={0.7}
        onRefresh={_refresh}
        refreshing={refreshing}
        keyExtractor={(item) => JSON.stringify(item.rssId)}
        ListFooterComponent={<ListFooter more={more} isLoading={isLoading} />}
      />
    </View>
  );
};
export default Follow;
