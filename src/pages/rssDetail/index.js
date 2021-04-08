import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  findNodeHandle,
  UIManager,
} from 'react-native';
import commonStyle from '@/style/common.js';
import {getRssContent} from '@/api/rssRecommendList';
import {formatTime} from '@/utils/format';
import {RssItem} from './components/RssItem';
import styles from './style.js';

const renderItem = ({item}) => {
  return <RssItem info={item} key={item.rssId} />;
};

const RssDetail = (props) => {
  const {rssId} = props.route.params;
  const [rssContentList, setRssContentList] = useState([]);
  const [rssContent, setRssContent] = useState('');
  const [rssImage, setRssImage] = useState('123');
  const [rssName, setRssName] = useState('');
  const {height} = Dimensions.get('screen');
  const [elementHeight, setElementHeight] = useState(0);
  const element = useRef(null);

  const getRssDetail = async (id) => {
    const result = await getRssContent(id);
    let flatListId = 1;
    setRssImage(result.data.rss.rssImage);
    setRssContent(result.data.rss.rssDescription);
    setRssName(result.data.rss.rssName);
    const list = result.data.rssContent.rss.channel.item.map((item) => {
      const regImage = /src="([^"]*)"/g;
      const regP = /<p>(.*?)<\/p>/g;
      const rssMsgImage = regImage.exec(item.description);
      let rssMsgContent = regP.exec(item.description);
      rssMsgContent =
        rssMsgContent && rssMsgContent[1].replace(/<[^<>]+>/g, '');

      return {
        rssId: flatListId++,
        rssName: result.data.title,
        rssImage: result.data.rss.rssImage,
        rssMsgTitle: item.title,
        rssMsgImage: rssMsgImage && rssMsgImage[1],
        publishTime: formatTime(
          result.data.rssContent.rss.channel.lastBuildDate,
        ),
        rssMsgContent: rssMsgContent,
      };
    });
    setRssContentList(list);
  };
  useEffect(() => {
    getRssDetail(rssId);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      element.current.measure((x, y, w, h, pageX, pageY) => {
        setElementHeight(parseInt(h));
      });
    });
  }, []);
  return (
    <View>
      <StatusBar backgroundColor={commonStyle.primary} translucent={false} />
      <View>
        <View ref={element} style={styles.rssDetailTop}>
          <View style={styles.rssDetailTopName}>
            <Image
              style={styles.rssImage}
              source={{
                uri: rssImage,
              }}
            />
            <Text style={styles.rssName}>{rssName}</Text>
          </View>
          <View style={styles.rssDetailTopDescription}>
            <Text style={styles.rssDetailTopDescriptionText}>{rssContent}</Text>
          </View>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followBtnText}>关注</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: height - elementHeight}}>
          <FlatList
            renderItem={renderItem}
            data={rssContentList}
            onEndReachedThreshold={0.7}
            keyExtractor={(item) => JSON.stringify(item.rssId)}
          />
        </View>
      </View>
    </View>
  );
};
export default RssDetail;
