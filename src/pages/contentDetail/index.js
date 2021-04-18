import React, {useRef} from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import {Loading} from '@/components/Loading';
// import {Nav} from '@/components/Nav';
import commonStyle from '@/style/common';

import styles from './style';

const ContentDetail = (props) => {
  const {uri} = props.route.params;
  const loading = useRef(null);
  const loadStart = () => {
    loading.current.showLoading();
  };
  const loadEnd = () => {
    loading.current.dismissLoading();
  };
  return (
    <>
      {/* <Nav title="新闻" /> */}
      <StatusBar backgroundColor={commonStyle.primary} />
      <Loading ref={loading} tip="正在加载,请稍后..." />
      <WebView
        source={{uri}}
        javaScriptEnabled={true}
        onLoadStart={loadStart}
        onLoadEnd={loadEnd}
      />
    </>
  );
};
export default ContentDetail;
