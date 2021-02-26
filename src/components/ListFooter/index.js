import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

export const ListFooterItem = ({title}) => {
  return (
    <View style={styles.listFooter}>
      <Text style={styles.listFooterTitle}>{title}</Text>
    </View>
  );
};
export const ListFooter = ({isLoading, more}) => {
  if (!more) {
    return <ListFooterItem title="已经到底了" />;
  }
  if (isLoading) {
    return <ListFooterItem title="正在加载" />;
  }
  if (more) {
    return <ListFooterItem title="上拉加载更多" />;
  }
};
