import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styles from './style';
export const RssItem = (props) => {
  const {info} = props;
  const {width} = Dimensions.get('window');
  return (
    <View style={[styles.rssItem, {width}]}>
      <View style={styles.rssItemTop}>
        <Image
          style={styles.rssImage}
          source={{
            uri: info.rssImage,
          }}
        />
        <Text style={styles.rssName}>{info.rssName}</Text>
      </View>
      <View style={[styles.rssItemMidCol]}>
        <View style={[styles.rssItemMidLeftCol]}>
          <Text style={styles.rssItemMidLeftTitle}>{info.rssMsgTitle}</Text>
          {/* <Text style={styles.rssItemMidLeftContent}>{info.rssMsgContent}</Text> */}
        </View>
        {info.rssMsgImage.length > 0 && (
          <View style={[styles.rssItemMidRightCol]}>
            {info.rssMsgImage.map((src, index) => {
              return (
                <Image
                  style={[
                    styles.rssItemMidRightImage,
                    info.rssMsgImage.length === index + 1
                      ? styles.rssItemMidRightImage
                      : styles.rssItemMidRightImageLast,
                  ]}
                  source={{
                    uri: src,
                  }}
                  key={src}
                />
              );
            })}
          </View>
        )}
      </View>
      <View style={styles.rssItemBottom}>
        {/* <Image
          style={styles.rssItemBottomImageCollection}
          source={require('@/assets/image/collection.png')}
        /> */}
        <Image
          style={styles.rssItemBottomImageUnCollection}
          source={require('@/assets/image/unCollection.png')}
        />
        <Image
          style={styles.rssItemBottomImageShare}
          source={require('@/assets/image/share.png')}
        />
      </View>
    </View>
  );
};
