/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconiconfonticon02 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M818.992 450.602H573.398V205.008H450.602v245.594H205.008v122.796h245.594v245.594h122.796V573.398h245.594z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconiconfonticon02.defaultProps = {
  size: 18,
};

Iconiconfonticon02 = React.memo ? React.memo(Iconiconfonticon02) : Iconiconfonticon02;

export default Iconiconfonticon02;
