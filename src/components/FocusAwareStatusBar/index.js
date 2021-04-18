import React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export const FocusAwareStatusBar = (props) => {
  const isFocused = useIsFocused();
  // return <StatusBar {...props} />;
  return isFocused ? <StatusBar {...props} /> : null;
};
