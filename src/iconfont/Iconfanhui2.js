/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconfanhui2 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M539.648 190.464l-46.08-46.08-364.544 363.52 363.52 363.52 46.08-46.08-317.44-317.44 318.464-317.44zM323.584 476.16v64.512H906.24V476.16H323.584z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfanhui2.defaultProps = {
  size: 18,
};

Iconfanhui2 = React.memo ? React.memo(Iconfanhui2) : Iconfanhui2;

export default Iconfanhui2;
