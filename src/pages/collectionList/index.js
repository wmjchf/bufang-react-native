import React, {useState, useEffect} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {
//   Menu,
//   MenuTrigger,
//   MenuOptions,
//   MenuOption,
// } from 'react-native-popup-menu';
import {getRssCollectionListData} from '@/store/reducer/rssCollection/action';
import {RssItem} from '@/pages/home/read/pages/components/RssItem';
import {ListFooter} from '@/components/ListFooter';
import StorageUtil from '@/libs/storage';
import commonStyle from '@/style/common';

const renderItem = ({item}) => {
  return <RssItem info={item} key={item.rssId} isFollow={true} />;
};
const Follow = () => {
  const dispatch = useDispatch();

  const [refreshing] = useState(false);

  const {dataList, pageNum, size, total, more, isLoading} = useSelector(
    (state) => {
      return state.rssCollection;
    },
  );
  useEffect(() => {
    StorageUtil.get('bufUserId').then((bufUserId) => {
      dispatch(getRssCollectionListData({pageSize: size, pageNum, bufUserId}));
    });
  }, []);

  const _loadData = () => {
    if (pageNum * size < total) {
      StorageUtil.get('bufUserId').then((bufUserId) => {
        dispatch(
          getRssCollectionListData({pageSize: size, pageNum, bufUserId}),
        );
      });
    }
  };
  const _refresh = () => {
    StorageUtil.get('bufUserId').then((bufUserId) => {
      dispatch(
        getRssCollectionListData({pageSize: size, pageNum: 1, bufUserId}),
      );
    });
  };

  return (
    <View>
      <FlatList
        renderItem={renderItem}
        data={dataList}
        onEndReached={_loadData}
        onEndReachedThreshold={0.7}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={_refresh}
            tintColor={commonStyle.primary}
            colors={[commonStyle.primary]}
          />
        }
        onRefresh={_refresh}
        refreshing={refreshing}
        keyExtractor={(item) => JSON.stringify(item.rssId)}
        ListFooterComponent={<ListFooter more={more} isLoading={isLoading} />}
      />
    </View>
  );
};
export default Follow;
