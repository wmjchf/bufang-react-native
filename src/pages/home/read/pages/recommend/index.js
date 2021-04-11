import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {
//   Menu,
//   MenuTrigger,
//   MenuOptions,
//   MenuOption,
// } from 'react-native-popup-menu';
import {getRssRecommendListData} from '@/store/reducer/rssRecommendList/action';
import {RssItem} from '../components/RssItem';
import {ListFooter} from '@/components/ListFooter';

const renderItem = ({item}) => {
  return <RssItem info={item} key={item.rssId} isFollow={false} />;
};
const Recommend = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing] = useState(false);
  let [more, setMore] = useState(true);
  const {dataList, pageNum, size, total} = useSelector((state) => {
    return state.rssRecommendList;
  });
  useEffect(() => {
    dispatch(getRssRecommendListData({pageSize: size, pageNum}));
  }, []);
  const _loadData = () => {
    if (pageNum * size > total) {
      console.log('没有更多了');
    } else {
      dispatch(getRssRecommendListData({pageSize: size, pageNum}));
    }
  };
  const _refresh = () => {
    dispatch(getRssRecommendListData({pageSize: size, pageNum: 1}));
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
export default Recommend;
