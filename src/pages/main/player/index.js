import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';

import TrackPlayer, {
  CAPABILITY_SEEK_TO,
  CAPABILITY_PLAY,
  CAPABILITY_PAUSE,
  CAPABILITY_STOP,
  CAPABILITY_SKIP_TO_NEXT,
  CAPABILITY_SKIP_TO_PREVIOUS,
} from 'react-native-track-player';
import {Nav} from '@/components/Nav';

import songs from './songs';
import Controller from './Controller';
import SliderComp from './SliderComp';

const {width, height} = Dimensions.get('window');

// const events = [
//   TrackPlayerEvents.PLAYBACK_STATE,
//   TrackPlayerEvents.PLAYBACK_ERROR
// ];

export default function PlayerScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null);
  const isPlayerReady = useRef(false);
  const index = useRef(0);

  const [songIndex, setSongIndex] = useState(0);

  const isItFromUser = useRef(true);

  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;
  // useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], (event) => {
  //   console.log(event);
  // });
  useEffect(() => {
    position.addListener(({value}) => {
      // console.log(value);
    });

    scrollX.addListener(({value}) => {
      const val = Math.round(value / width);

      setSongIndex(val);
    });

    TrackPlayer.setupPlayer().then(async () => {
      // add the array of songs in the playlist
      // await TrackPlayer.reset();
      // await TrackPlayer.add(songs);
      // // TrackPlayer.play();
      // isPlayerReady.current = true;
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        // alwaysPauseOnInterruption: true,
        capabilities: [
          CAPABILITY_SEEK_TO,
          CAPABILITY_PLAY,
          CAPABILITY_PAUSE,
          CAPABILITY_STOP,
          CAPABILITY_SKIP_TO_NEXT,
          CAPABILITY_SKIP_TO_PREVIOUS,
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SEEK_TO,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        ],
      });
      await TrackPlayer.add(songs);
      // TrackPlayer.play();
      isPlayerReady.current = true;
      // await TrackPlayer.skip(songs[songIndex].id);
      // add listener on track change
      TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (e) => {
        console.log('song ended', e);

        const trackId = (await TrackPlayer.getCurrentTrack()) - 1; //get the current id
        console.log('track id', trackId, 'index', index.current);

        if (trackId !== index.current) {
          setSongIndex(trackId);
          isItFromUser.current = false;

          if (trackId > index.current) {
            goNext();
          } else {
            goPrv();
          }
          setTimeout(() => {
            isItFromUser.current = true;
          }, 200);
        }

        // isPlayerReady.current = true;
      });

      //monitor intterupt when other apps start playing music
      // TrackPlayer.addEventListener(Event.RemoteDuck, (e) => {
      //   console.log(e, 'aaaaaaaaaaaaaaaaaa');
      //   if (e.paused) {
      //     // if pause true we need to pause the music
      //     TrackPlayer.pause();
      //   } else {
      //     TrackPlayer.play();
      //   }
      // });
    });

    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.destroy();
      exitPlayer();
    };
  }, []);

  // change the song when index changes
  useEffect(() => {
    if (isPlayerReady.current && isItFromUser.current) {
      TrackPlayer.skip(songs[songIndex].id)
        .then((_) => {
          console.log('changed track');
        })
        .catch((e) => console.log('error in changing track ', e));
    }
    index.current = songIndex;
  }, [songIndex]);

  const exitPlayer = async () => {
    try {
      await TrackPlayer.stop();
    } catch (error) {
      console.error('exitPlayer', error);
    }
  };

  const goNext = async () => {
    slider.current.scrollToOffset({
      offset: (index.current + 1) * width,
    });

    await TrackPlayer.play();
  };
  const goPrv = async () => {
    slider.current.scrollToOffset({
      offset: (index.current - 1) * width,
    });

    await TrackPlayer.play();
  };
  const renderItem = ({index, item}) => {
    return (
      <Animated.View
        style={{
          alignItems: 'center',
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -100,
              ),
            },
          ],
        }}>
        <Animated.Image
          source={item.artwork}
          style={{width: 320, height: 320, borderRadius: 5}}
        />
      </Animated.View>
    );
  };

  return (
    <>
      <Nav title="播放" />
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={{height: 320}}>
          <Animated.FlatList
            ref={slider}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            data={songs}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
          />
        </SafeAreaView>
        <View>
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
        </View>

        <SliderComp />
        {/* <Button title="点击" onPress={() => seekTo(100)} /> */}
        <Controller onNext={goNext} onPrv={goPrv} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#ffffff',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: height,
    maxHeight: 650,
    backgroundColor: '#030303',
  },
});
