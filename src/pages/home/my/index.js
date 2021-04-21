// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   Image,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import {useSelector} from 'react-redux';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import ParallaxScrollView from 'react-native-parallax-scroll-view';
// import {FocusAwareStatusBar} from '@/components/FocusAwareStatusBar';
// import SafeAreaView from 'react-native-safe-area-view';
// import {useNavigation} from '@react-navigation/native';
// import {getCollectionCount, getFollowCount} from '@/api/rssRecommendList';
// import MyRssList from './pages/myRss';
// import RecommendList from './pages/remmendRss';
// import StorageUtil from '@/libs/storage';
// import commonStyle from '@/style/common';

// import styles from './style';

// const Tab = createMaterialTopTabNavigator();

// const My = () => {
//   const [followCount, setFollowCount] = useState(0);
//   const [collectionCount, setCollectionCount] = useState(0);
//   const [isScroll, setIsScroll] = useState(true);
//   const theme = useSelector((state) => state.theme);
//   const statusBarConfig = {
//     backgroundColor: commonStyle.primary,
//     translucent: false,
//   };
//   const tabBarData = [
//     {
//       id: 1,
//       name: '推荐订阅源',
//       component: RecommendList,
//     },
//     {
//       id: 2,
//       name: '我的订阅源',
//       component: MyRssList,
//     },
//   ];
//   const tabBarOptions = {
//     activeTintColor: theme.mainColor,
//     inactiveTintColor: theme.unSelectTabColor,
//     tabStyle: {
//       // shadowColor: 'white',
//     },
//     indicatorStyle: {
//       backgroundColor: theme.mainColor,
//       marginLeft: 50,
//       width: 100,
//     },
//     style: {
//       // marginLeft: 50,
//       // marginRight: 50,
//       // shadowColor: 'white',
//       shadowColor: 'black',
//       shadowOpacity: 0, //修改的地方
//       shadowRadius: 0,
//       shadowOffset: {
//         height: 0,
//       },
//       elevation: 0,
//     },
//     // renderIndicator: () => {
//     //   return <View style={styles.indicatorStyle} />;
//     // },
//   };
//   const navigation = useNavigation();
//   const toCollection = () => {
//     navigation.push('collectionList');
//   };
//   const toSetting = () => {
//     navigation.push('setting');
//   };
//   const _getFollowCount = async () => {
//     const bufUserId = await StorageUtil.get('bufUserId');
//     const result = await getFollowCount({bufUserId});
//     setFollowCount(result.data);
//   };
//   const _getCollectionCount = async () => {
//     const bufUserId = await StorageUtil.get('bufUserId');
//     const result = await getCollectionCount({bufUserId});
//     setCollectionCount(result.data);
//   };
//   const generateTab = () => {
//     return tabBarData.map((item) => {
//       return (
//         <Tab.Screen key={item.id} name={item.name} component={item.component} />
//       );
//     });
//   };
//   const ChangeHeaderVisibility = (v) => {
//     if (!v) {
//       setIsScroll(false);
//     }
//   };
//   useEffect(() => {
//     _getCollectionCount();
//   }, []);
//   useEffect(() => {
//     _getFollowCount();
//   }, []);
//   return (
//     <SafeAreaView style={[styles.my]}>
//       <FocusAwareStatusBar {...statusBarConfig} />
//       {/* <View style={styles.operation}>
//         <TouchableOpacity onPress={toSetting}>
//           <Image
//             style={styles.menu}
//             source={require('@/assets/image/menu.png')}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.userInfoContainer}>
//         <View style={styles.avatar}>
//           <Image
//             style={styles.image}
//             source={{
//               uri:
//                 'https://pics6.baidu.com/feed/a08b87d6277f9e2f726b0e3db2882622b999f3ec.jpeg?token=8da340017c308f0d70971953991c9ef9',
//             }}
//           />
//         </View>
//         <View style={styles.userInfo}>
//           <Text style={styles.userName}>不方科技</Text>
//           <Text style={styles.userDes}>正义的化身</Text>
//         </View>
//         <TouchableOpacity style={styles.collection} onPress={toCollection}>
//           <Text style={styles.collectionText}>我的收藏</Text>
//         </TouchableOpacity>
//       </View>
//       <Tab.Navigator tabBarOptions={tabBarOptions} lazy={true}>
//         {generateTab()}
//       </Tab.Navigator> */}
//       <ParallaxScrollView
//         backgroundColor={commonStyle.primary}
//         contentBackgroundColor="#fff"
//         //下面渲染背景
//         renderBackground={() => (
//           <Image source={require('@/assets/image/background.jpg')} />
//         )}
//         //下面是渲染前景
//         renderForeground={() => (
//           <View style={styles.userInfoContainer}>
//             <View style={styles.avatar}>
//               <Image
//                 style={styles.image}
//                 source={{
//                   uri:
//                     'https://pics6.baidu.com/feed/a08b87d6277f9e2f726b0e3db2882622b999f3ec.jpeg?token=8da340017c308f0d70971953991c9ef9',
//                 }}
//               />
//             </View>
//             <View style={styles.userInfo}>
//               <Text style={styles.userName}>不方科技</Text>
//               <Text style={styles.userDes}>正义的化身</Text>
//             </View>
//             <TouchableOpacity style={styles.collection} onPress={toCollection}>
//               <Text style={styles.collectionText}>我的收藏</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         renderStickyHeader={() => (
//           <View key="sticky-header" style={styles.stickySection}>
//             <Text style={styles.stickySectionText}>我的</Text>
//           </View>
//         )}
//         // onChangeHeaderVisibility={ChangeHeaderVisibility}
//         scrollEnabled={false}
//         stickyHeaderHeight={80}
//         parallaxHeaderHeight={100}>
//         <Tab.Navigator tabBarOptions={tabBarOptions} lazy={true}>
//           {generateTab()}
//         </Tab.Navigator>
//       </ParallaxScrollView>

//       {/* <View style={styles.numberContainer}>
//         <View style={styles.numberItem}>
//           <Text style={styles.number}>{followCount}</Text>
//           <Text style={styles.numberTitle}>关注数</Text>
//         </View>
//         <View style={styles.numberItem}>
//           <Text style={styles.number}>{collectionCount}</Text>
//           <Text style={styles.numberTitle}>收藏数</Text>
//         </View>
//       </View> */}
//       {/* <View style={styles.list}>
//         <TouchableOpacity onPress={toFollow}>
//           <View style={styles.listItem}>
//             <View style={styles.itemContainer}>
//               <Image
//                 style={styles.imageItem1}
//                 source={require('@/assets/image/follow.png')}
//               />
//               <Text style={styles.itemTitle}>我的关注</Text>
//             </View>
//             <Image
//               style={styles.imageItem2}
//               source={require('@/assets/image/right.png')}
//             />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={toCollection}>
//           <View style={styles.listItem}>
//             <View style={styles.itemContainer}>
//               <Image
//                 style={styles.imageItem1}
//                 source={require('@/assets/image/myCollection.png')}
//               />
//               <Text style={styles.itemTitle}>我的收藏</Text>
//             </View>

//             <Image
//               style={styles.imageItem2}
//               source={require('@/assets/image/right.png')}
//             />
//           </View>
//         </TouchableOpacity>
//         <View style={styles.listItem}>
//           <View style={styles.itemContainer}>
//             <Image
//               style={styles.imageItem1}
//               source={require('@/assets/image/suggestion.png')}
//             />
//             <Text style={styles.itemTitle}>反馈建议</Text>
//           </View>

//           <Image
//             style={styles.imageItem2}
//             source={require('@/assets/image/right.png')}
//           />
//         </View>
//         <View style={styles.listItem}>
//           <View style={styles.itemContainer}>
//             <Image
//               style={styles.imageItem1}
//               source={require('@/assets/image/about.png')}
//             />
//             <Text style={styles.itemTitle}>关于</Text>
//           </View>

//           <Image
//             style={styles.imageItem2}
//             source={require('@/assets/image/right.png')}
//           />
//         </View>
//       </View> */}
//     </SafeAreaView>
//   );
// };
// export default My;
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  StyleSheet,
} from 'react-native';
import AnimatedScreen from 'react-native-animated-screen';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import MyRssList from './pages/myRss';
import RemmendList from './pages/remmendRss';
import style from './style';
import commonStyle from '@/style/common';
import styles from './pages/myRss/followItem/style';

const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

// const style = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '900',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '400',
//   },
//   section: {
//     backgroundColor: '#e0e0e0',
//     padding: 10,
//   },
//   header: {
//     justifyContent: 'flex-start',
//     flexDirection: 'column',
//   },
//   spacer: {
//     height: 40,
//   },
//   smallHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logoWrapper: {
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   logo: {
//     width: 30,
//     height: 30,
//     borderRadius: 30,
//   },
//   input: {
//     width: '100%',
//     height: 30,
//     backgroundColor: '#e0e0e0',
//     opacity: 0.8,
//     borderRadius: 15,
//     paddingVertical: 0,
//     paddingHorizontal: 15,
//   },
//   background: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//   },
//   item: {
//     height: 60,
//     borderWidth: 1,
//     borderRadius: 5,
//     marginVertical: 5,
//     marginHorizontal: 10,
//     padding: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   text: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   image: {
//     width: 40,
//     height: 40,
//   },
// });
// const statusBarConfig = {
//   backgroundColor: commonStyle.primary,
//   translucent: false,
// };

const My = () => {
  // const theme = useSelector((state) => state.theme);
  const statusBarConfig = {
    backgroundColor: commonStyle.primary,
    translucent: true,
  };

  const navigation = useNavigation();

  const toCollection = () => {
    navigation.push('collectionList');
  };

  const getBackgroundOpacity = useCallback((scrollY) => {
    return {
      backgroundColor: scrollY.interpolate({
        inputRange: [0, 170],
        outputRange: [commonStyle.primary, commonStyle.primary],
        extrapolate: 'clamp',
      }),
      height: scrollY.interpolate({
        inputRange: [0, 170],
        outputRange: [0, 50],
        extrapolate: 'clamp',
      }),
    };
  }, []);
  const renderBackground = useCallback(
    (scrollY) => (
      <Animated.View style={[style.background, getBackgroundOpacity(scrollY)]}>
        <Text style={style.backgroundTitle}>我的</Text>
      </Animated.View>
    ),
    [getBackgroundOpacity],
  );

  const headerAnimatedStyle = useCallback(
    (scrollY) => ({
      transform: [
        {
          scale: scrollY.interpolate({
            inputRange: [0, 200],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        },
      ],
    }),
    [],
  );
  const [currentTabbar, setCurrentTabbar] = useState(0);
  return (
    <AnimatedScreen.Wrapper
      disableParallaxEffect={true}
      headerMaxHeight={170}
      avoidSafeArea={true}
      headerMinHeight={120}>
      <StatusBar {...statusBarConfig} />
      <AnimatedScreen.Header
        renderBackground={renderBackground}
        withShadow={false}
        style={style.header}>
        <View style={style.headerConatiner}>
          <AnimatedScreen.CollapsibleElement
            interpolate={{height: [100, 0], opacity: [1, 1]}}>
            <View style={style.userInfoContainer}>
              <View style={style.avatar}>
                <Image
                  style={style.image}
                  source={{
                    uri:
                      'https://pics6.baidu.com/feed/a08b87d6277f9e2f726b0e3db2882622b999f3ec.jpeg?token=8da340017c308f0d70971953991c9ef9',
                  }}
                />
              </View>
              <View style={style.userInfo}>
                <Text style={style.userName}>不方科技</Text>
                <Text style={style.userDes}>正义的化身</Text>
              </View>
              <TouchableOpacity style={style.collection} onPress={toCollection}>
                <Text style={style.collectionText}>我的收藏</Text>
              </TouchableOpacity>
            </View>
          </AnimatedScreen.CollapsibleElement>
          <AnimatedScreen.Element interpolate={{height: [50, 0]}}>
            <View />
          </AnimatedScreen.Element>
          <AnimatedScreen.Element>
            <View style={style.tabbarContainer}>
              <TouchableOpacity
                style={style.tabbarItem}
                onPress={() => setCurrentTabbar(0)}>
                <Text style={style.tabbarItemTitle}>推荐订阅源</Text>
                {currentTabbar === 0 && <View style={style.tabbarItemActive} />}
              </TouchableOpacity>
              <TouchableOpacity
                style={style.tabbarItem}
                onPress={() => setCurrentTabbar(1)}>
                <Text style={style.tabbarItemTitle}>我的订阅源</Text>
                {currentTabbar === 1 && <View style={style.tabbarItemActive} />}
              </TouchableOpacity>
            </View>
          </AnimatedScreen.Element>
        </View>
      </AnimatedScreen.Header>

      <RemmendList isShow={currentTabbar === 0} />
      <MyRssList isShow={currentTabbar === 1} />
    </AnimatedScreen.Wrapper>
  );
};

export default My;
