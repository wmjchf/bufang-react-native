/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconsousuo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M830.486 796.125L672.791 638.428c44.96-52.8 72.109-121.232 72.109-196.016 0-167.084-135.448-302.533-302.532-302.533S139.835 275.328 139.835 442.412s135.449 302.532 302.533 302.532c74.783 0 143.216-27.15 196.017-72.109l157.717 157.697c9.5 9.499 24.885 9.499 34.384 0s9.5-24.908 0-34.407zM442.366 698.4c-141.38 0-255.988-114.632-255.988-255.99 0-141.402 114.608-255.988 255.989-255.988 141.38 0 255.99 114.586 255.99 255.989 0 141.357-114.61 255.99-255.99 255.99z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsousuo.defaultProps = {
  size: 18,
};

Iconsousuo = React.memo ? React.memo(Iconsousuo) : Iconsousuo;

export default Iconsousuo;
