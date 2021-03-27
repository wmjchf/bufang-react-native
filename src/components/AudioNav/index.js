import React from 'react';
import {StyleSheet} from 'react-native';
import NavBar from 'react-native-nav';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#030303',
    justifyContent: 'center',
  },
});

const StatusBarConfig = {
  animated: true,
  hidden: false,
  backgroundColor: '#030303',
  translucent: true, // I recommend you leave this true by default and
  // set the backgroundColor to a non-translucent
  // color if you don't want translucency
};

export const AudioNav = () => {
  return <NavBar style={styles} statusBar={StatusBarConfig} />;
};
