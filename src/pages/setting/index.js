import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import StorageUtil from '@/libs/storage';
import commonStyle from '@/style/common';
import styles from './style';

const Setting = () => {
  return (
    <View>
      <View style={styles.list}>
        <TouchableOpacity>
          <View style={styles.listItem}>
            <View style={styles.itemContainer}>
              <Image
                style={styles.imageItem1}
                source={require('@/assets/image/exitLogin.png')}
              />
              <Text style={styles.itemTitle}>退出登录</Text>
            </View>
            <Image
              style={styles.imageItem2}
              source={require('@/assets/image/right.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.listItem}>
            <View style={styles.itemContainer}>
              <Image
                style={styles.imageItem1}
                source={require('@/assets/image/deleteCount.png')}
              />
              <Text style={styles.itemTitle}>注销登录</Text>
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
    </View>
  );
};
export default Setting;
