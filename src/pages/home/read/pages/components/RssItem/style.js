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
    position: 'relative',
  },
  followBtn: {
    position: 'absolute',
    right: 0,
    top: 3,
    width: 60,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonStyle.primary,
    borderRadius: 15,
  },
  followBtnText: {
    color: '#fff',
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
    marginTop: 5,
  },
  rssItemMidCol: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  rssItemMidLeft: {
    flex: 2,
    minHeight: 80,
  },
  rssItemMidLeftNo: {
    minHeight: 0,
  },
  rssItemMidLeftTitle: {
    fontWeight: 'bold',
    color: '#3a3a3a',
    fontSize: commonStyle.fontSize5,
  },
  rssItemMidLeftContent: {
    marginTop: 10,
    fontSize: commonStyle.fontSize3,
    lineHeight: 20,
    color: '#464445',
  },
  rssItemMidRight: {
    width: 120,
    height: 80,
    borderRadius: 5,
    marginLeft: 10,
    flexDirection: 'row',
  },
  rssItemMidRightCol: {
    marginTop: 0,
    flexDirection: 'row',
  },
  rssItemMidRightImage: {
    width: 120,
    height: 80,
    borderRadius: 5,
    // marginRight: 15,
  },
  rssItemMidRightImageLast: {
    marginRight: 0,
  },
  // 底部
  rssItemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },
  rssItemBottomImageContainer: {
    flexDirection: 'row',
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
  publishTime: {
    color: '#999999',
    fontSize: commonStyle.fontSize3,
  },
});

export default styles;
