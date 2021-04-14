import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  splash: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonStyle.primary,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
