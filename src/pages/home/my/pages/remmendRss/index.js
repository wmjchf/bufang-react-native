import React, {useState, useEffect, useRef} from 'react';
import {View, RefreshControl, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AnimatedScreen from 'react-native-animated-screen';
import {getRssHubListData} from '@/store/reducer/rssHubList/action';
import {ListFooter} from '@/components/ListFooter';
import commonStyle from '@/style/common';
import {FollowItem} from './followItem';
import styles from './style';

const renderItem = ({item}) => {
  return <FollowItem info={item} key={item.rssId} />;
};
const RemmendList = (props) => {
  const dispatch = useDispatch();
  const {isShow} = props;
  const [refreshing] = useState(false);
  const flatlistRef = useRef(null);
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
      dispatch(
        getRssHubListData({pageSize: size, pageNum: pageNum + 1, rssName: ''}),
      );
    }
  };
  const _refresh = () => {
    dispatch(getRssHubListData({pageSize: size, pageNum: 1}));
  };
  // useEffect(() => {
  //   if (!isShow) {
  //     flatlistRef.current.scrollToOffset(0);
  //   }
  // }, [isShow]);
  return (
    // <View style={styles.remmendRss}>
    <AnimatedScreen.FlatList
      renderItem={renderItem}
      style={[styles.remmendRssList, isShow ? '' : styles.noShow]}
      data={dataList}
      onEndReached={_loadData}
      onEndReachedThreshold={0.1}
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
      ListFooterComponent={() => (
        <ListFooter more={more} isLoading={isLoading} />
      )}
      flatlistRef={flatlistRef}
    />
    // </View>
  );
};
export default RemmendList;
