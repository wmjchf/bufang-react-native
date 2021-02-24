/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconxiala1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M142.805 265.173a58.667 58.667 0 1 0-82.944 82.987l410.667 410.667a58.667 58.667 0 0 0 82.944 0L964.139 348.16a58.667 58.667 0 1 0-82.944-82.987L512 634.368 142.805 265.173z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxiala1.defaultProps = {
  size: 18,
};

Iconxiala1 = React.memo ? React.memo(Iconxiala1) : Iconxiala1;

export default Iconxiala1;
