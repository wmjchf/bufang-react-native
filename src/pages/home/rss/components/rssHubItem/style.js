import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  rssHubItem: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rssHubItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  rssHubItemTitle: {
    fontSize: 15,
    color: '#000',
    marginTop: 5,
  },
});

export default styles;
