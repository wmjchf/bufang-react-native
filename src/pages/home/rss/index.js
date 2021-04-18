import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';
import {getRssTypeList} from '@/api/rss';
import {FocusAwareStatusBar} from '@/components/FocusAwareStatusBar';
import {RssTypeContainer} from './components/rssTypeContainer';
// import CustomScrollView from 'custom-scroll-view';
// const AnimatedCustomScrollView = Animated . createAnimatedComponent ( CustomScrollView )

import commonStyle from '@/style/common';

import styles from './style';
const Rss = () => {
  const statusBarConfig = {
    backgroundColor: 'transparent',
    // translucent: false,
  };
  const [rssTypeList, setRssTypeList] = useState([]);
  const _getRssTypeList = async () => {
    const result = await getRssTypeList({typeName: ''});
    if (result.code === 200) {
      setRssTypeList(result.data);
    }
  };
  useEffect(() => {
    _getRssTypeList();
  }, []);
  return (
    <SafeAreaView style={[styles.my]}>
      <FocusAwareStatusBar {...statusBarConfig} />
      <ParallaxScrollView
        backgroundColor={commonStyle.primary}
        contentBackgroundColor="#fff"
        //下面渲染背景
        renderBackground={() => (
          <Image source={require('@/assets/image/background.jpg')} />
        )}
        //下面是渲染前景
        renderForeground={() => (
          <View style={styles.foreground}>
            <Text style={styles.tip1}>高效获取信息</Text>
            <Text style={styles.tip2}>你需要这份 RSS 订阅源</Text>
          </View>
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>RSS订阅源</Text>
          </View>
        )}
        stickyHeaderHeight={80}
        parallaxHeaderHeight={250}>
        {rssTypeList.map((rssType) => {
          return <RssTypeContainer key={rssType.rssTypeId} info={rssType} />;
        })}
      </ParallaxScrollView>
    </SafeAreaView>
  );
};
export default Rss;
