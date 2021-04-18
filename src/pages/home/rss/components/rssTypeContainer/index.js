import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {getRssHubList} from '@/api/rss';
import {RssHubItem} from '../rssHubItem';
import styles from './style';

const renderItem = ({item}) => {
  return <RssHubItem info={item} key={item.rssId} />;
};

export const RssTypeContainer = (props) => {
  const {info} = props;
  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(0);
  const [rssHubList, setRssHubList] = useState([]);
  const pageSize = 10;
  const _getRssTypeList = async (rssTypeId) => {
    const result = await getRssHubList({
      rssTypeId,
      rssName: '',
      pageNum,
      pageSize,
    });
    setPageNum(result.data.pageNum);
    setTotal(result.data.total);
    setRssHubList(result.data.data);
  };
  useEffect(() => {
    _getRssTypeList(info.rssTypeId);
  }, []);
  return (
    <View style={styles.RssTypeContainer}>
      <Text style={styles.RssTypeName}>{info.typeName}</Text>
      <View style={styles.RssHubList}>
        {/* <FlatList /> */}
        <FlatList
          renderItem={renderItem}
          data={rssHubList}
          horizontal={true}
          // onEndReached={_loadData}
          onEndReachedThreshold={0.7}
          keyExtractor={(item) => JSON.stringify(item.rssId)}
          // ListFooterComponent={<ListFooter more={more} isLoading={isLoading} />}
        />
        {rssHubList.length === 0 && (
          <View style={styles.noRssHubList}>
            <Text>没有更多数据</Text>
          </View>
        )}
      </View>
    </View>
  );
};
