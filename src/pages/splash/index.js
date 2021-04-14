import React, {useEffect} from 'react';
import {Dimensions, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import StorageUtil from '@/libs/storage';
import commonStyle from '@/style/common';
import styles from './style';

const Splash = () => {
  const statusBarConfig = {
    backgroundColor: commonStyle.primary,
    translucent: true,
  };
  // StorageUtil.clear();
  const {height} = Dimensions.get('screen');
  const navigation = useNavigation();
  const judgeLogin = async () => {
    const accessToken = await StorageUtil.get('accessToken');
    if (accessToken) {
      setTimeout(() => {
        navigation.replace('home');
      }, 5000);
    } else {
      setTimeout(() => {
        navigation.replace('login');
      }, 5000);
    }
  };
  useEffect(() => {
    judgeLogin();
  }, []);
  return (
    <SafeAreaView style={[styles.splash, {height}]}>
      <StatusBar {...statusBarConfig} />
      <Text style={styles.title}>欢迎来到我的世界</Text>
    </SafeAreaView>
  );
};

export default Splash;
