import {StyleSheet} from 'react-native';
import commonStyle from '../../../../../../../style/common';
export const styles = StyleSheet.create({
  playListItem: {
    width: 170,
    height: 190,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImg: {
    width: 170,
    flex: 170,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  topItemContainer: {
    justifyContent: 'flex-end',
  },
  itemContainer: {
    width: 170,
    justifyContent: 'flex-start',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playListItemDescription: {
    height: 15,
    width: 170,
    marginTop: 5,
  },
  text1: {
    fontSize: commonStyle.fontSize2,
    color: '#fff',
    marginLeft: 5,
  },
  text2: {
    fontSize: commonStyle.fontSize2,
    color: '#333',
    width: 170,
  },
  textName: {
    width: 80,
  },
});
