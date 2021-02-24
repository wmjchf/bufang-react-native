/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontianjiahaoyou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M822.9 457.1V320h-73.2v137.1H612.6v73.2h137.1v137.1h73.2V530.3H960v-73.2z m-349.5 74.6c-24.6 10.8-51.7 16.8-80.3 16.8-28.5 0-55.7-6.1-80.3-16.8C170 568.7 64 699.9 64 841.1h658.3c0-141.2-106-272.4-248.9-309.4zM228.5 347.4a164.6 164.6 0 1 0 329.2 0 164.6 164.6 0 1 0-329.2 0z"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
    </Svg>
  );
};

Icontianjiahaoyou.defaultProps = {
  size: 18,
};

Icontianjiahaoyou = React.memo ? React.memo(Icontianjiahaoyou) : Icontianjiahaoyou;

export default Icontianjiahaoyou;
