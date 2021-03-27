import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';
import {Text} from 'react-native';
import styles from './style';

export const SetInterval = forwardRef((props, ref) => {
  const [second, setSecond] = useState(() => {
    return props.time;
  });
  const {endCallback} = props;
  const timer = useRef(null);
  useEffect(() => {
    if (second > 0) {
      timer.current = setTimeout(() => {
        setSecond(second - 1);
      }, 1000);
    } else {
      endCallback();
    }
  }, [second, endCallback]);
  const startTime = () => {
    setSecond(props.time);
  };
  const endTime = () => {
    clearTimeout(timer.current);
  };
  useImperativeHandle(ref, () => ({
    startTime,
    endTime,
  }));
  return <Text style={styles.tip2}>{second}s</Text>;
});
