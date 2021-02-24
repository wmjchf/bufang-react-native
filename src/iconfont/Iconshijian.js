/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshijian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M554.667 516.267l102.4 102.4-59.734 59.733L473.6 554.667h-4.267V341.333h85.334v174.934zM512 853.333c-187.733 0-341.333-153.6-341.333-341.333S324.267 170.667 512 170.667 853.333 324.267 853.333 512 699.733 853.333 512 853.333zM512 768c140.8 0 256-115.2 256-256S652.8 256 512 256 256 371.2 256 512s115.2 256 256 256z"
        fill={getIconColor(color, 0, '#444444')}
      />
    </Svg>
  );
};

Iconshijian.defaultProps = {
  size: 18,
};

Iconshijian = React.memo ? React.memo(Iconshijian) : Iconshijian;

export default Iconshijian;
