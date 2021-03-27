import React, {useState, useEffect, useRef} from 'react';
import {View} from 'react-native';
import styles from './style';

export const Cursor = () => {
  const [opacity, setOpacity] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    const changeOpacity = () => {
      setOpacity(opacity === 0 ? 1 : 0);
    };
    timer.current = setInterval(changeOpacity, 500);
    return () => clearInterval(timer.current);
  }, [opacity]);

  return <View style={[styles.mark, {opacity}]} />;
};
