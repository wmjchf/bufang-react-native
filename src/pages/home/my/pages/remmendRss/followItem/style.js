import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  rssDetailTop: {
    padding: 10,
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
    color: '#333',
  },
  rssDetailTopDescription: {
    marginTop: 10,
  },
  rssDetailTopDescriptionText: {
    color: '#333',
  },
});

export default styles;
