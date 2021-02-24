/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconjindu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256.05 255.953h512.099v64.044H256.05z m256.233 256.146v-63.89H256.05v63.918zM256.05 639.965h448.087v63.919H256.05z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M127.99 127.99l0.035 767.649h768.149v32.58-96.498H192.037V127.99"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconjindu.defaultProps = {
  size: 18,
};

Iconjindu = React.memo ? React.memo(Iconjindu) : Iconjindu;

export default Iconjindu;
