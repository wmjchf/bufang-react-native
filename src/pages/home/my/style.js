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
  operation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
    backgroundColor: commonStyle.primary,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  menu: {
    width: 40,
    height: 40,
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
  userInfoContainer: {
    paddingHorizontal: 16,
    backgroundColor: commonStyle.primary,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  collection: {
    position: 'absolute',
    right: 10,
    top: 30,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 35,
    zIndex: 10000,
  },
  collectionText: {
    color: commonStyle.primary,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    height: 40,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  userName: {
    color: '#fff',
  },
  userDes: {
    color: '#fff',
  },
  numberContainer: {
    paddingBottom: 16,
    backgroundColor: commonStyle.primary,
    height: 80,
    flexDirection: 'row',
  },
  numberItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  numberTitle: {
    color: '#fff',
    marginTop: 15,
  },
  list: {
    padding: 16,
  },
  listItem: {
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 17,
  },
  imageItem1: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  imageItem2: {
    width: 20,
    height: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default styles;
