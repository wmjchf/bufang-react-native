import React from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
// import {Nav} from '@/components/Nav';
import commonStyle from '@/style/common';

import styles from './style';

const ContentDetail = (props) => {
  const {uri} = props.route.params;
  return (
    <>
      {/* <Nav title="新闻" /> */}
      <StatusBar backgroundColor={commonStyle.primary} />
      <WebView source={{uri}} javaScriptEnabled={true} />
    </>
  );
};
export default ContentDetail;
