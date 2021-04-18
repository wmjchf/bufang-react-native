import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {FocusAwareStatusBar} from '@/components/FocusAwareStatusBar';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation} from '@react-navigation/native';
import {getCollectionCount, getFollowCount} from '@/api/rssRecommendList';
import MyRssList from './pages/myRss';
import RecommendList from './pages/remmendRss';
import StorageUtil from '@/libs/storage';
import commonStyle from '@/style/common';

import styles from './style';

const Tab = createMaterialTopTabNavigator();

const My = () => {
  const [followCount, setFollowCount] = useState(0);
  const [collectionCount, setCollectionCount] = useState(0);
  const theme = useSelector((state) => state.theme);
  const statusBarConfig = {
    backgroundColor: commonStyle.primary,
    translucent: false,
  };
  const tabBarData = [
    {
      id: 1,
      name: '推荐订阅源',
      component: RecommendList,
    },
    {
      id: 2,
      name: '我的订阅源',
      component: MyRssList,
    },
  ];
  const tabBarOptions = {
    activeTintColor: theme.mainColor,
    inactiveTintColor: theme.unSelectTabColor,
    tabStyle: {
      // shadowColor: 'white',
    },
    indicatorStyle: {
      backgroundColor: theme.mainColor,
      marginLeft: 50,
      width: 100,
    },
    style: {
      // marginLeft: 50,
      // marginRight: 50,
      // shadowColor: 'white',
      shadowColor: 'black',
      shadowOpacity: 0, //修改的地方
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
    // renderIndicator: () => {
    //   return <View style={styles.indicatorStyle} />;
    // },
  };
  const navigation = useNavigation();
  const toCollection = () => {
    navigation.push('collectionList');
  };
  const toSetting = () => {
    navigation.push('setting');
  };
  const _getFollowCount = async () => {
    const bufUserId = await StorageUtil.get('bufUserId');
    const result = await getFollowCount({bufUserId});
    setFollowCount(result.data);
  };
  const _getCollectionCount = async () => {
    const bufUserId = await StorageUtil.get('bufUserId');
    const result = await getCollectionCount({bufUserId});
    setCollectionCount(result.data);
  };
  const generateTab = () => {
    return tabBarData.map((item) => {
      return (
        <Tab.Screen key={item.id} name={item.name} component={item.component} />
      );
    });
  };
  useEffect(() => {
    _getCollectionCount();
  }, []);
  useEffect(() => {
    _getFollowCount();
  }, []);
  return (
    <SafeAreaView style={[styles.my]}>
      <FocusAwareStatusBar {...statusBarConfig} />
      <View style={styles.operation}>
        <TouchableOpacity onPress={toSetting}>
          <Image
            style={styles.menu}
            source={require('@/assets/image/menu.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfoContainer}>
        <View style={styles.avatar}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://pics6.baidu.com/feed/a08b87d6277f9e2f726b0e3db2882622b999f3ec.jpeg?token=8da340017c308f0d70971953991c9ef9',
            }}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>不方科技</Text>
          <Text style={styles.userDes}>正义的化身</Text>
        </View>
        <TouchableOpacity style={styles.collection} onPress={toCollection}>
          <Text style={styles.collectionText}>我的收藏</Text>
        </TouchableOpacity>
      </View>
      <Tab.Navigator tabBarOptions={tabBarOptions} lazy={true}>
        {generateTab()}
      </Tab.Navigator>
      {/* <ParallaxScrollView
        backgroundColor={commonStyle.primary}
        contentBackgroundColor="#fff"
        //下面渲染背景
        renderBackground={() => (
          <Image source={require('@/assets/image/background.jpg')} />
        )}
        //下面是渲染前景
        renderForeground={() => (
          <View style={styles.userInfoContainer}>
            <View style={styles.avatar}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    'https://pics6.baidu.com/feed/a08b87d6277f9e2f726b0e3db2882622b999f3ec.jpeg?token=8da340017c308f0d70971953991c9ef9',
                }}
              />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>不方科技</Text>
              <Text style={styles.userDes}>正义的化身</Text>
            </View>
            <TouchableOpacity style={styles.collection} onPress={toCollection}>
              <Text style={styles.collectionText}>我的收藏</Text>
            </TouchableOpacity>
          </View>
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>我的</Text>
          </View>
        )}
        stickyHeaderHeight={80}
        parallaxHeaderHeight={120}>
        <Tab.Navigator tabBarOptions={tabBarOptions} lazy={true}>
          {generateTab()}
        </Tab.Navigator>
      </ParallaxScrollView> */}

      {/* <View style={styles.numberContainer}>
        <View style={styles.numberItem}>
          <Text style={styles.number}>{followCount}</Text>
          <Text style={styles.numberTitle}>关注数</Text>
        </View>
        <View style={styles.numberItem}>
          <Text style={styles.number}>{collectionCount}</Text>
          <Text style={styles.numberTitle}>收藏数</Text>
        </View>
      </View> */}
      {/* <View style={styles.list}>
        <TouchableOpacity onPress={toFollow}>
          <View style={styles.listItem}>
            <View style={styles.itemContainer}>
              <Image
                style={styles.imageItem1}
                source={require('@/assets/image/follow.png')}
              />
              <Text style={styles.itemTitle}>我的关注</Text>
            </View>
            <Image
              style={styles.imageItem2}
              source={require('@/assets/image/right.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toCollection}>
          <View style={styles.listItem}>
            <View style={styles.itemContainer}>
              <Image
                style={styles.imageItem1}
                source={require('@/assets/image/myCollection.png')}
              />
              <Text style={styles.itemTitle}>我的收藏</Text>
            </View>

            <Image
              style={styles.imageItem2}
              source={require('@/assets/image/right.png')}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.listItem}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.imageItem1}
              source={require('@/assets/image/suggestion.png')}
            />
            <Text style={styles.itemTitle}>反馈建议</Text>
          </View>

          <Image
            style={styles.imageItem2}
            source={require('@/assets/image/right.png')}
          />
        </View>
        <View style={styles.listItem}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.imageItem1}
              source={require('@/assets/image/about.png')}
            />
            <Text style={styles.itemTitle}>关于</Text>
          </View>

          <Image
            style={styles.imageItem2}
            source={require('@/assets/image/right.png')}
          />
        </View>
      </View> */}
    </SafeAreaView>
  );
};
export default My;
