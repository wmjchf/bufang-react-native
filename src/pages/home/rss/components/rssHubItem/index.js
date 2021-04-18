import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
export const RssHubItem = (props) => {
  const {info} = props;
  const navigation = useNavigation();
  const toRssDetail = () => {
    navigation.push('rssDetail', {rssId: info.rssId});
  };
  return (
    <TouchableOpacity onPress={toRssDetail}>
      <View style={styles.rssHubItem}>
        <Image style={styles.rssHubItemImage} source={{uri: info.rssImage}} />
        <Text style={styles.rssHubItemTitle}>{info.rssName}</Text>
      </View>
    </TouchableOpacity>
  );
};
