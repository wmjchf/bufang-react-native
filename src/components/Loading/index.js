import React, {useState, useImperativeHandle, forwardRef} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export const Loading = forwardRef((props, ref) => {
  const minShowingTime = 200;
  let startTime = null;
  const [isLoading, setIsLoading] = useState(false);
  const _setIsLoading = (_isLoading) => {
    if (_isLoading !== isLoading) {
      let curTimeLong = new Date().getTime();
      if (_isLoading) {
        startTime = curTimeLong;
        setIsLoading(_isLoading);
      } else {
        let hasShowingTimeLong = curTimeLong - startTime;
        if (hasShowingTimeLong < minShowingTime) {
          setTimeout(() => {
            setIsLoading(_isLoading);
          }, minShowingTime - hasShowingTimeLong);
        } else {
          setIsLoading(_isLoading);
        }
      }
    }
  };
  const showLoading = () => {
    _setIsLoading(true);
  };
  const dismissLoading = () => {
    _setIsLoading(false);
  };
  useImperativeHandle(ref, () => ({
    showLoading,
    dismissLoading,
  }));
  if (!isLoading) {
    return null;
  }
  return (
    <View style={styles.loadingContainer}>
      <View style={styles.loading}>
        <ActivityIndicator color="white" />
        <Text style={styles.loadingTitle}>{props.tip}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    width: width,
    height: height,
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    backgroundColor: '#10101099',
    minHeight: 100,
    minWidth: 100,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingTitle: {
    marginTop: 10,
    fontSize: 14,
    color: 'white',
  },
});
