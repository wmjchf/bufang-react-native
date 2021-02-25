import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import IconFont from '../../../../../../../iconfont';
const _PlayListItem = (props) => {
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
const stateMapToProps = (state) => {
  return {
    theme: state.theme,
  };
};
export const PlayListItem = connect(stateMapToProps)(_PlayListItem);
const styles = StyleSheet.create({
  playListItem: {
    width: 170,
    height: 190,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImg: {
    width: 170,
    flex: 170,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  topItemContainer: {
    justifyContent: 'flex-end',
  },
  itemContainer: {
    width: 170,
    justifyContent: 'flex-start',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playListItemDescription: {
    height: 15,
    width: 170,
    marginTop: 5,
  },
  text1: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 5,
  },
  text2: {
    fontSize: 12,
    color: '#333',
    width: 170,
  },
  textName: {
    width: 80,
  },
});
