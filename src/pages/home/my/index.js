import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation} from '@react-navigation/native';
import commonStyle from '@/style/common';

import styles from './style';
const My = () => {
  const statusBarConfig = {
    backgroundColor: commonStyle.primary,
    // translucent: false,
  };
  const navigation = useNavigation();
  const toCollection = () => {
    navigation.push('collectionList');
  };
  return (
    <SafeAreaView style={[styles.my]}>
      <StatusBar {...statusBarConfig} />

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
      </View>
      <View style={styles.numberContainer}>
        <View style={styles.numberItem}>
          <Text style={styles.number}>123</Text>
          <Text style={styles.numberTitle}>关注数</Text>
        </View>
        <View style={styles.numberItem}>
          <Text style={styles.number}>123</Text>
          <Text style={styles.numberTitle}>收藏数</Text>
        </View>
      </View>
      <View style={styles.list}>
        <TouchableOpacity>
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
      </View>
    </SafeAreaView>
  );
};
export default My;
