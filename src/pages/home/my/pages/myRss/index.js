import React, {useState, useEffect} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {
//   Menu,
//   MenuTrigger,
//   MenuOptions,
//   MenuOption,
// } from 'react-native-popup-menu';
import {getFollowListData} from '@/store/reducer/followList/action';
import {ListFooter} from '@/components/ListFooter';
import StorageUtil from '@/libs/storage';
import commonStyle from '@/style/common';
import {FollowItem} from './followItem';
import styles from './style';

const renderItem = ({item}) => {
  return <FollowItem info={item} key={item.rssId} />;
};
const MyRssList = () => {
  const dispatch = useDispatch();

  const [refreshing] = useState(false);

  const {dataList, pageNum, size, total, more, isLoading} = useSelector(
    (state) => {
      return state.followList;
    },
  );
  useEffect(() => {
    StorageUtil.get('bufUserId').then((bufUserId) => {
      dispatch(getFollowListData({pageSize: size, pageNum, bufUserId}));
    });
  }, []);

  const _loadData = () => {
    if (pageNum * size < total) {
      StorageUtil.get('bufUserId').then((bufUserId) => {
        dispatch(getFollowListData({pageSize: size, pageNum, bufUserId}));
      });
    }
  };
  const _refresh = () => {
    StorageUtil.get('bufUserId').then((bufUserId) => {
      dispatch(getFollowListData({pageSize: size, pageNum: 1, bufUserId}));
    });
  };

  return (
    <View style={styles.myRss}>
      <FlatList
        renderItem={renderItem}
        data={dataList}
        onEndReached={_loadData}
        onEndReachedThreshold={0.7}
        style={styles.myRssList}
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
export default MyRssList;
