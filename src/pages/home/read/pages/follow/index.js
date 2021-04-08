import React, {useState} from 'react';
import {View, FlatList, Dimensions, Text} from 'react-native';
// import {
//   MenuProvider,
//   Menu,
//   MenuTrigger,
//   MenuOptions,
//   MenuOption,
// } from 'react-native-popup-menu';
// import {useDispatch, useSelector} from 'react-redux';
// import {getRssListData} from '@/store/reducer/rssList/action';
import {RssItem} from '../components/RssItem';
import {ListFooter} from '@/components/ListFooter';
import styles from './style';

const renderItem = ({item}) => {
  return <RssItem info={item} key={item.id} />;
};
const data = new Array(500)
  .fill(0)
  .map((a, i) => ({key: i, value: 'item' + i}));
const Follow = () => {
  // const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing] = useState(false);
  let [more, setMore] = useState(true);
  const {width, height} = Dimensions.get('window');
  // const {dataList} = useSelector((state) => state.rssList);
  // useEffect(() => {
  //   dispatch(getRssListData({pageSize: 10, pageNum: 1}));
  // }, []);
  return (
    <View>
      <Text>123</Text>
    </View>
    // <MenuProvider style={styles.container}>
    //   <View>
    //     <Menu>
    //       <MenuTrigger text="Select option" />
    //       <MenuOptions
    //         style={styles.menuOption}
    //         customStyles={{
    //           optionsWrapper: {
    //             width: parseInt(width) - 100,

    //             backgroundColor: 'green',
    //             height: 400,
    //           },
    //           optionsContainer: {
    //             width: parseInt(width),
    //             height: parseInt(height) - 90,
    //             zIndex: 100,
    //             elevation: 0,
    //             alignItems: 'center',
    //             backgroundColor: '#fff',
    //             justifyContent: 'center',
    //           },
    //         }}>
    //         <FlatList
    //           data={data}
    //           renderItem={({item}) => (
    //             <MenuOption value={item.value} text={item.value} />
    //           )}
    //         />
    //       </MenuOptions>
    //     </Menu>

    //     {/* <FlatList
    //     renderItem={renderItem}
    //     data={data}
    //     // onEndReached={_loadData}
    //     onEndReachedThreshold={0.7}
    //     // onRefresh={_refresh}
    //     refreshing={refreshing}
    //     ListFooterComponent={<ListFooter more={more} isLoading={isLoading} />}
    //   /> */}
    //   </View>
    // </MenuProvider>
  );
};
export default Follow;
