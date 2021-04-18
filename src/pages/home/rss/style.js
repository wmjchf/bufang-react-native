import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  my: {
    backgroundColor: '#fff',
    flex: 1,
  },
  foreground: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tip1: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  tip2: {
    fontSize: 15,
    color: '#fff',
  },

  stickySection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    paddingTop: 20,
    width: window.width,
    backgroundColor: commonStyle.commonStyle,
    justifyContent: 'space-around',
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
