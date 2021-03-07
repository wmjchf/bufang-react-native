import {StyleSheet} from 'react-native';

const ITEMHEIGHT = 320;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#ffffff',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#030303',
  },
  itemImg: {width: ITEMHEIGHT, height: ITEMHEIGHT, borderRadius: 5},
  itemHieght: {height: ITEMHEIGHT},
});

export default styles;
