/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconjiazai4Kuai = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M874.04355 149.964L793.60655 230.4a398.2 398.2 0 1 0 116.616 281.584h113.771a511.97 511.97 0 1 1-149.95-362.02z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjiazai4Kuai.defaultProps = {
  size: 18,
};

Iconjiazai4Kuai = React.memo ? React.memo(Iconjiazai4Kuai) : Iconjiazai4Kuai;

export default Iconjiazai4Kuai;
