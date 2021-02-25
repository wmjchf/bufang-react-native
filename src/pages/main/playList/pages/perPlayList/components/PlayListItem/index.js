import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';
import IconFont from '@/iconfont';

export const PlayListItem = (props) => {
  const {info} = props;
  const source = {uri: info.coverImgUrl};
  const name = info.creator.nickname;
  const playCount = info.playCount;
  const description = info.name;
  return (
    <View style={styles.playListItem}>
      <ImageBackground source={source} style={styles.coverImg}>
        <View style={[styles.itemContainer, styles.topItemContainer]}>
          <IconFont name="biaoqiantubiao22" size={25} color="#fff" />
          <Text style={styles.text1}>{playCount}</Text>
        </View>
        <View style={styles.itemContainer}>
          <IconFont name="denglu" size={25} color="#fff" />
          <Text
            style={[styles.text1, styles.textName]}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {name}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.playListItemDescription}>
        <Text style={styles.text2} numberOfLines={2} ellipsizeMode={'tail'}>
          {description}
        </Text>
      </View>
    </View>
  );
};
