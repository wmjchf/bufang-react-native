/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import StorageUtil from '../../../libs/storage';
const Home = () => {
  const save = () => {
    StorageUtil.save('token', 'wangmingjie');
  };
  const getValue = async () => {
    const token = await StorageUtil.get('token');
    console.log(token);
  };
  const clear = () => {
    StorageUtil.clear();
  };
  return (
    <View>
      <TouchableOpacity onPress={save}>
        <View style={styles.btn}>
          <Text>保存</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={getValue}>
        <View style={styles.btn}>
          <Text>获取</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={clear}>
        <View style={styles.btn}>
          <Text>清除</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
export default Home;
