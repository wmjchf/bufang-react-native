import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
export const RssItem = (props) => {
  const {info} = props;
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const toRssDetail = () => {
    navigation.navigate('rssDetail', {rssId: info.rssId});
  };
  return (
    <View style={[styles.rssItem, {width}]}>
      <TouchableOpacity onPress={toRssDetail}>
        <View style={styles.rssItemTop}>
          <Image
            style={styles.rssImage}
            source={{
              uri: info.rssImage,
            }}
          />
          <Text style={styles.rssName}>{info.rssName}</Text>
          {/* <TouchableOpacity style={styles.followBtn}>
          <Text style={styles.followBtnText}>关注</Text>
        </TouchableOpacity> */}
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.rssItemMid,
          info.rssMsgContent ? '' : styles.rssItemMidCol,
        ]}>
        <View
          style={[
            styles.rssItemMidLeft,
            info.rssMsgImage ? '' : styles.rssItemMidLeftNo,
            info.rssMsgContent ? '' : styles.rssItemMidLeftNo,
          ]}>
          <Text style={styles.rssItemMidLeftTitle}>{info.rssMsgTitle}</Text>

          {info.rssMsgContent ? (
            <Text style={styles.rssItemMidLeftContent} numberOfLines={3}>
              {info.rssMsgContent}
            </Text>
          ) : (
            <Text />
          )}
        </View>

        {info.rssMsgImage ? (
          <View
            style={[
              styles.rssItemMidRight,
              info.rssMsgContent ? '' : styles.rssItemMidRightCol,
            ]}>
            <Image
              style={[styles.rssItemMidRightImage]}
              source={{
                uri: info.rssMsgImage,
              }}
            />
          </View>
        ) : (
          <Text />
        )}
      </View>
      <View style={styles.rssItemBottom}>
        <Text style={styles.publishTime}>{info.publishTime}</Text>
        {/* <Image
          style={styles.rssItemBottomImageCollection}
          source={require('@/assets/image/collection.png')}
        /> */}
        <View style={styles.rssItemBottomImageContainer}>
          <Image
            style={styles.rssItemBottomImageUnCollection}
            source={require('@/assets/image/unCollection.png')}
          />
          <Image
            style={styles.rssItemBottomImageShare}
            source={require('@/assets/image/share.png')}
          />
        </View>
      </View>
    </View>
  );
};
