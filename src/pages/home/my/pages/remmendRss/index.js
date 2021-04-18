import React, {useState, useEffect} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRssHubListData} from '@/store/reducer/rssHubList/action';
import {ListFooter} from '@/components/ListFooter';
import commonStyle from '@/style/common';
import {FollowItem} from './followItem';
import styles from './style';

const renderItem = ({item}) => {
  return <FollowItem info={item} key={item.rssId} />;
};
const RemmendList = () => {
  const dispatch = useDispatch();

  const [refreshing] = useState(false);

  const {dataList, pageNum, size, total, more, isLoading} = useSelector(
    (state) => {
      return state.rssHubList;
    },
  );
  useEffect(() => {
    dispatch(getRssHubListData({pageSize: size, pageNum, rssName: ''}));
  }, []);

  const _loadData = () => {
    if (pageNum * size < total) {
      dispatch(getRssHubListData({pageSize: size, pageNum}));
    }
  };
  const _refresh = () => {
    dispatch(getRssHubListData({pageSize: size, pageNum: 1}));
  };

  return (
    <View style={styles.remmendRss}>
      <FlatList
        renderItem={renderItem}
        style={styles.remmendRssList}
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
export default RemmendList;
