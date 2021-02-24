import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
export const PlayListItem = (props) => {
  const {info} = props;
  const source = {uri: info.coverImgUrl};
  return (
    <View style={styles.playListItem}>
      <ImageBackground source={source} style={styles.coverImg}>
        <Text>111</Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  playListItem: {
    width: 170,
    height: 170,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImg: {
    width: 170,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
