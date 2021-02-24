/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontianjiahaoyou1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 384a170.667 170.667 0 1 0 341.333 0A170.667 170.667 0 1 0 256 384z m384 115.2h256v68.267H640z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M802.133 405.333v256h-68.266v-256zM384 597.333h85.333a256 256 0 0 1 256 256H128a256 256 0 0 1 256-256z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Icontianjiahaoyou1.defaultProps = {
  size: 18,
};

Icontianjiahaoyou1 = React.memo ? React.memo(Icontianjiahaoyou1) : Icontianjiahaoyou1;

export default Icontianjiahaoyou1;
