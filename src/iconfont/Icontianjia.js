/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontianjia = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M118.154 464.738h787.692v94.524H118.154z"
        fill={getIconColor(color, 0, '#9AB864')}
      />
      <Path
        d="M464.738 905.846V118.154h94.524v787.692z"
        fill={getIconColor(color, 1, '#9AB864')}
      />
    </Svg>
  );
};

Icontianjia.defaultProps = {
  size: 18,
};

Icontianjia = React.memo ? React.memo(Icontianjia) : Icontianjia;

export default Icontianjia;
