/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconjianshaojianqujianhao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M308.7 470.9h406.2V552H308.7v-81.1z m203.1 405.5c201.9 0 365.6-163.4 365.6-365s-163.7-365-365.6-365c-201.9 0-365.6 163.4-365.6 365s163.7 365 365.6 365z m0 81.1C265 957.5 65 757.8 65 511.4c0-246.3 200-446 446.8-446s446.8 199.7 446.8 446.1c0 246.3-200 446-446.8 446z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjianshaojianqujianhao.defaultProps = {
  size: 18,
};

Iconjianshaojianqujianhao = React.memo ? React.memo(Iconjianshaojianqujianhao) : Iconjianshaojianqujianhao;

export default Iconjianshaojianqujianhao;
