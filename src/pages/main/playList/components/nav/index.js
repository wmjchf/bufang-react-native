import React from 'react';
import {StyleSheet} from 'react-native';
import NavBar, {NavTitle} from 'react-native-nav';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  statusBar: {
    // StatusBar styles here (all view styles are valid)

    // default iOS styles:
    height: 32,
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
  backgroundColor: 'red',
  translucent: true, // I recommend you leave this true by default and
  // set the backgroundColor to a non-translucent
  // color if you don't want translucency
};

export const Nav = () => {
  return (
    <NavBar style={styles} statusBar={StatusBarConfig}>
      <NavTitle style={style1.title}>歌单</NavTitle>
    </NavBar>
  );
};
