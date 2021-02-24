/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconzhankai = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M750.976 532.288c7.68-19.456 3.84-42.688-11.456-58.496L358.4 79.808c-20.416-21.12-53.44-21.12-73.856 0-20.416 21.12-20.416 55.232 0 76.352L628.672 512 284.48 867.84c-20.416 21.12-20.416 55.296 0 76.352 20.416 21.056 53.44 21.056 73.856 0l381.056-393.984a53.523 53.523 0 0 0 11.584-17.92z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzhankai.defaultProps = {
  size: 18,
};

Iconzhankai = React.memo ? React.memo(Iconzhankai) : Iconzhankai;

export default Iconzhankai;
