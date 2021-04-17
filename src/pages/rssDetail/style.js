import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  rssDetailTop: {
    padding: 10,
    backgroundColor: commonStyle.primary,
    position: 'relative',
  },
  rssDetailTopName: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  rssImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  rssName: {
    marginLeft: 10,
    color: '#fff',
  },
  rssDetailTopDescription: {
    marginTop: 10,
  },
  rssDetailTopDescriptionText: {
    color: '#fff',
  },
  followBtn: {
    position: 'absolute',
    right: 10,
    top: 15,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingLeft: 10,
    padding: 10,
  },
  followBtnText: {
    color: commonStyle.primary,
  },
  flatList: {
    paddingBottom: 10,
  },
});

export default styles;
