import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  my: {
    backgroundColor: '#fff',
    flex: 1,
  },
  userInfoContainer: {
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: commonStyle.primary,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
