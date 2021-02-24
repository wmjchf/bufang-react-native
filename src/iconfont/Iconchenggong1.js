/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconchenggong1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 981.333C252.8 981.333 42.667 771.2 42.667 512S252.8 42.667 512 42.667 981.333 252.8 981.333 512 771.2 981.333 512 981.333z m-50.432-326.101L310.613 504.32a32 32 0 0 0-45.226 45.227l174.72 174.762a32.341 32.341 0 0 0 0.341 0.342l0.256 0.213a32 32 0 0 0 50.048-6.144l337.45-379.605a32 32 0 1 0-47.871-42.496L461.568 655.232z"
        fill={getIconColor(color, 0, '#52C41A')}
      />
    </Svg>
  );
};

Iconchenggong1.defaultProps = {
  size: 18,
};

Iconchenggong1 = React.memo ? React.memo(Iconchenggong1) : Iconchenggong1;

export default Iconchenggong1;
