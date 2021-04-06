import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  // rssItem盒子样式
  rssItem: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    marginBottom: 1,
  },
  // 顶部rss订阅源样式
  rssItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rssImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  rssName: {
    marginLeft: 10,
  },
  // 中部rss信息样式
  rssItemMid: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  rssItemMidCol: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  rssItemMidLeft: {
    flex: 2,
    minHeight: 80,
  },
  rssItemMidLeftCol: {
    minHeight: 0,
  },
  rssItemMidLeftTitle: {
    fontWeight: 'bold',
    fontSize: commonStyle.fontSize8,
  },
  rssItemMidLeftContent: {
    marginTop: 10,
    fontSize: commonStyle.fontSize5,
    lineHeight: 20,
    color: '#333',
  },
  rssItemMidRight: {
    width: 120,
    height: 80,
    borderRadius: 5,
    marginLeft: 10,
    flexDirection: 'row',
  },
  rssItemMidRightCol: {
    marginTop: 20,
    flexDirection: 'row',
  },
  rssItemMidRightImage: {
    width: 120,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  rssItemMidRightImageLast: {
    marginRight: 0,
  },
  // 底部
  rssItemBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  rssItemBottomImageShare: {
    position: 'relative',
    width: 22,
    height: 22,
    marginLeft: 15,
    top: 2,
  },
  rssItemBottomImageUnCollection: {
    position: 'relative',
    marginLeft: 15,
    width: 22,
    height: 22,
  },
  rssItemBottomImageCollection: {
    position: 'relative',
    marginLeft: 15,
    width: 20,
    height: 20,
  },
});

export default styles;
