import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRssRecommendListData} from '@/store/reducer/rssRecommendList/action';
import {RssItem} from '../components/RssItem';
import {ListFooter} from '@/components/ListFooter';

const renderItem = ({item}) => {
  console.log(item.rssId);
  return <RssItem info={item} key={item.rssId} />;
};
const Recommend = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing] = useState(false);
  let [more, setMore] = useState(true);
  const {dataList} = useSelector((state) => state.rssRecommendList);
  useEffect(() => {
    dispatch(getRssRecommendListData({pageSize: 10, pageNum: 1}));
  }, []);
  return (
    <View>
      <FlatList
        renderItem={renderItem}
        data={dataList}
        // onEndReached={_loadData}
        onEndReachedThreshold={0.7}
        // onRefresh={_refresh}
        refreshing={refreshing}
        ListFooterComponent={<ListFooter more={more} isLoading={isLoading} />}
      />
    </View>
  );
};
export default Recommend;
