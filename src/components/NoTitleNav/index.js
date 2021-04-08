import React from 'react';
import {StyleSheet} from 'react-native';
import NavBar, {NavTitle} from 'react-native-nav';
import commonStyle from '@/style/common.js';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: commonStyle.primary,
    justifyContent: 'center',
    height: 0,
    elevation: 0,
  },
});
const style1 = StyleSheet.create({
  title: {
    // NavTitle styles here (all text styles are valid)

    // default styles:
    fontSize: 20,
    letterSpacing: 0.5,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});

const StatusBarConfig = {
  animated: true,
  hidden: false,
  backgroundColor: commonStyle.primary,
  translucent: true, // I recommend you leave this true by default and
  // set the backgroundColor to a non-translucent
  // color if you don't want translucency
};

export const NoTitleNav = (props) => {
  return (
    <NavBar style={styles} statusBar={StatusBarConfig}>
      {/* <NavTitle style={style1.title}>{props.title}</NavTitle> */}
    </NavBar>
  );
};
