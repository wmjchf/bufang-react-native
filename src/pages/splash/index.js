import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StorageUtil from '@/libs/storage';
import styles from './style';

const Splash = () => {
  const navigation = useNavigation();
  const judgeLogin = async () => {
    const accessToken = await StorageUtil.get('accessToken');
    if (accessToken) {
      setTimeout(() => {
        navigation.navigate('home');
      }, 5000);
    } else {
      setTimeout(() => {
        navigation.navigate('login');
      }, 5000);
    }
  };
  useEffect(() => {
    judgeLogin();
  }, []);
  return (
    <View style={styles.splash}>
      <Text>欢迎来到我的世界</Text>
    </View>
  );
};

export default Splash;
