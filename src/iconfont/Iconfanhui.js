/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconfanhui = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M702.95 958.894c-8.376 0-16.752-3.197-23.145-9.59L265.159 534.658c-12.787-12.777-12.787-33.513 0-46.29L679.805 73.723c12.787-12.787 33.502-12.787 46.29 0 12.786 12.777 12.786 33.513 0 46.29l-391.502 391.5 391.502 391.503c12.787 12.777 12.787 33.513 0 46.289-6.394 6.393-14.77 9.59-23.145 9.59z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfanhui.defaultProps = {
  size: 18,
};

Iconfanhui = React.memo ? React.memo(Iconfanhui) : Iconfanhui;

export default Iconfanhui;
