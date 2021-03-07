import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {
  useTrackPlayerEvents,
  TrackPlayerEvents,
  STATE_PLAYING,
  STATE_PAUSED,
} from 'react-native-track-player';

export default function Controller({onNext, onPrv}) {
  const [isPlaying, setIsPlaying] = useState('paused'); //paused play loading
  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], (event) => {
    if (event.type === TrackPlayerEvents.PLAYBACK_STATE) {
      if (event.state === STATE_PLAYING) {
        setIsPlaying('playing');
      } else if (event.state === STATE_PAUSED) {
        setIsPlaying('paused');
      }
    }
  });

  const returnPlayBtn = () => {
    switch (isPlaying) {
      case 'playing':
        return <Icon color="#fff" name="pause" size={45} />;
      case 'paused':
        return <Icon color="#fff" name="play-arrow" size={45} />;
      default:
        return <ActivityIndicator size={45} color="#fff" />;
    }
  };

  const onPlayPause = () => {
    if (isPlaying === 'playing') {
      TrackPlayer.pause();
    } else if (isPlaying === 'paused') {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrv}>
        <Icon color="#fff" name="skip-previous" size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
        {returnPlayBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <Icon color="#fff" name="skip-next" size={45} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
  },
});
