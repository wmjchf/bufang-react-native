/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconfanhui1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 160.853l-76.8-75.52L332.373 439.04 256 514.133l76.8 75.947 354.133 348.587 75.947-75.094-353.707-348.586z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfanhui1.defaultProps = {
  size: 18,
};

Iconfanhui1 = React.memo ? React.memo(Iconfanhui1) : Iconfanhui1;

export default Iconfanhui1;
