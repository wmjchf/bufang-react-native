import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  RssTypeContainer: {
    padding: 10,
  },
  RssTypeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rssHubList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  noRssHubList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
