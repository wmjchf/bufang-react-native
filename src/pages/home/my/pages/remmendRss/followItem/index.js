import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

export const FollowItem = (props) => {
  const {info} = props;
  const navigation = useNavigation();
  const toRssDetail = () => {
    navigation.navigate('rssDetail', {rssId: info.rssId});
  };
  return (
    <TouchableOpacity onPress={toRssDetail}>
      <View style={styles.rssDetailTop}>
        <View style={styles.rssDetailTopName}>
          <Image
            style={styles.rssImage}
            source={{
              uri: info.rssImage,
            }}
          />
          <Text style={styles.rssName}>{info.rssName}</Text>
        </View>
        <View style={styles.rssDetailTopDescription}>
          <Text style={styles.rssDetailTopDescriptionText} numberOfLines={2}>
            {info.rssDescription}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
