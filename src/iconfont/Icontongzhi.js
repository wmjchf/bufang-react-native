/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontongzhi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.332667 654.222361V341.333667a341.332667 341.332667 0 0 0-682.665334 0v312.889694L28.444472 853.332167h967.111056zM512 1024a113.777889 113.777889 0 0 0 113.777889-113.777889H398.222111A113.777889 113.777889 0 0 0 512 1024z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontongzhi.defaultProps = {
  size: 18,
};

Icontongzhi = React.memo ? React.memo(Icontongzhi) : Icontongzhi;

export default Icontongzhi;
