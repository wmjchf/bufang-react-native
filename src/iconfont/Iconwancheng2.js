/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconwancheng2 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M412.459 603.627L749.525 268.16a42.667 42.667 0 0 1 60.203 0l31.104 30.955a42.667 42.667 0 0 1 0 60.48L443.328 755.22a42.859 42.859 0 0 1-6.677 5.44 42.667 42.667 0 0 1-54.443-4.821l-199.04-198.101a42.667 42.667 0 0 1 0-60.48l31.104-30.955a42.667 42.667 0 0 1 60.203 0l137.984 137.323z"
        fill={getIconColor(color, 0, '#2A2A37')}
      />
    </Svg>
  );
};

Iconwancheng2.defaultProps = {
  size: 18,
};

Iconwancheng2 = React.memo ? React.memo(Iconwancheng2) : Iconwancheng2;

export default Iconwancheng2;
