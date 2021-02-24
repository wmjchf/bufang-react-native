/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconwancheng1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M448 896c-16.9 0-33.2-6.7-45.3-18.8l-320-320c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l266.1 266.1 404.3-577.5c20.3-28.9 60.2-36 89.1-15.8 29 20.3 36 60.2 15.8 89.1l-448 640c-10.8 15.5-28 25.4-46.8 27.1-2 0.2-3.9 0.3-5.7 0.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconwancheng1.defaultProps = {
  size: 18,
};

Iconwancheng1 = React.memo ? React.memo(Iconwancheng1) : Iconwancheng1;

export default Iconwancheng1;
