import React, {useRef, useEffect, useState} from 'react';
import {View, SafeAreaView, Text, Animated} from 'react-native';
import {connect} from 'react-redux';
import TrackPlayer, {
  CAPABILITY_SEEK_TO,
  CAPABILITY_PLAY,
  CAPABILITY_PAUSE,
  CAPABILITY_STOP,
  CAPABILITY_SKIP_TO_NEXT,
  CAPABILITY_SKIP_TO_PREVIOUS,
} from 'react-native-track-player';
import {AudioNav} from '@/components/AudioNav';

import songs from './songs';
import Controller from './Controller';
import SliderComp from './SliderComp';
import styles from './style';

// const events = [
//   TrackPlayerEvents.PLAYBACK_STATE,
//   TrackPlayerEvents.PLAYBACK_ERROR
// ];

const _Aduio = (props) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null);
  const isPlayerReady = useRef(false);
  const index = useRef(0);

  const [songIndex, setSongIndex] = useState(0);

  const isItFromUser = useRef(true);

  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, props.width)).current;
  const generateItemContainerStyle = (i) => {
    return {
      alignItems: 'center',
      width: props.width,
      transform: [
        {
          translateX: Animated.multiply(Animated.add(position, -i), -100),
        },
      ],
    };
  };
  // useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], (event) => {
  //   console.log(event);
  // });
  useEffect(() => {
    position.addListener(({value}) => {
      // console.log(value);
    });

    scrollX.addListener(({value}) => {
      const val = Math.round(value / props.width);

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

        let trackId = await TrackPlayer.getCurrentTrack(); //get the current id
        console.log('track id', trackId, 'index', index.current);
        trackId = trackId - 1;
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
      offset: (index.current + 1) * props.width,
    });

    await TrackPlayer.play();
  };
  const goPrv = async () => {
    slider.current.scrollToOffset({
      offset: (index.current - 1) * props.width,
    });

    await TrackPlayer.play();
  };
  const renderItem = ({index, item}) => {
    const style = generateItemContainerStyle(index);
    return (
      <Animated.View style={style}>
        <Animated.Image source={item.artwork} style={styles.itemImg} />
      </Animated.View>
    );
  };

  return (
    <>
      <AudioNav />
      <SafeAreaView style={[styles.container, {height: props.height}]}>
        <SafeAreaView style={styles.itemHieght}>
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
        <Controller onNext={goNext} onPrv={goPrv} />
      </SafeAreaView>
    </>
  );
};
const stateMapToProp = (state) => {
  return {
    width: state.global.width,
    height: state.global.height,
  };
};
export default connect(stateMapToProp)(_Aduio);
