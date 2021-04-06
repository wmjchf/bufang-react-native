import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {getRssListData} from '@/store/reducer/rssList/action';
import {RssItem} from '../components/RssItem';
import {ListFooter} from '@/components/ListFooter';

const renderItem = ({item}) => {
  return <RssItem info={item} key={item.id} />;
};
const data = [
  {
    id: '1',
    rssName: '网易云音乐',
    rssImage:
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3324287611,3832720410&fm=26&gp=0.jpg',
    rssMsgTitle: '你记得我，我就活着',
    rssMsgContent:
      '理想之光不灭，信念之光不灭。我们一定要铭记烈士们的遗愿，永志不忘他们为之流血牺牲的伟大理想。',
    rssMsgImage: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.iheima.com%2F2016%2F0312%2F1457746141594.jpg&refer=http%3A%2F%2Fupload.iheima.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620103056&t=11a9f7c76b485a3074d99840ee9efbcd',
    ],
  },
  {
    id: '2',
    rssName: '知乎',
    rssImage:
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3324287611,3832720410&fm=26&gp=0.jpg',
    rssMsgTitle: '你记得我，我就活着',
    rssMsgContent:
      '理想之光不灭，信念之光不灭。我们一定要铭记烈士们的遗愿，永志不忘他们为之流血牺牲的伟大理想。',
    rssMsgImage: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.iheima.com%2F2016%2F0312%2F1457746141594.jpg&refer=http%3A%2F%2Fupload.iheima.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620103056&t=11a9f7c76b485a3074d99840ee9efbcd',
    ],
  },
  {
    id: '3',
    rssName: 'zaker新闻',
    rssImage:
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3324287611,3832720410&fm=26&gp=0.jpg',
    rssMsgTitle: '你记得我，我就活着',
    rssMsgContent:
      '理想之光不灭，信念之光不灭。我们一定要铭记烈士们的遗愿，永志不忘他们为之流血牺牲的伟大理想。',
    rssMsgImage: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.iheima.com%2F2016%2F0312%2F1457746141594.jpg&refer=http%3A%2F%2Fupload.iheima.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620103056&t=11a9f7c76b485a3074d99840ee9efbcd',
    ],
  },
  {
    id: '4',
    rssName: '掘金',
    rssImage:
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3324287611,3832720410&fm=26&gp=0.jpg',
    rssMsgTitle: '你记得我，我就活着',
    rssMsgContent:
      '理想之光不灭，信念之光不灭。我们一定要铭记烈士们的遗愿，永志不忘他们为之流血牺牲的伟大理想。',
    rssMsgImage: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.iheima.com%2F2016%2F0312%2F1457746141594.jpg&refer=http%3A%2F%2Fupload.iheima.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620103056&t=11a9f7c76b485a3074d99840ee9efbcd',
    ],
  },
];
const Follow = () => {
  // const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing] = useState(false);
  let [more, setMore] = useState(true);
  // const {dataList} = useSelector((state) => state.rssList);
  // useEffect(() => {
  //   dispatch(getRssListData({pageSize: 10, pageNum: 1}));
  // }, []);
  return (
    <View>
      <FlatList
        renderItem={renderItem}
        data={data}
        // onEndReached={_loadData}
        onEndReachedThreshold={0.7}
        // onRefresh={_refresh}
        refreshing={refreshing}
        ListFooterComponent={<ListFooter more={more} isLoading={isLoading} />}
      />
    </View>
  );
};
export default Follow;
