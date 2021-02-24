/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconfenxiang1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M779.636 954.182H244.364A174.778 174.778 0 0 1 69.818 779.636V244.364A174.778 174.778 0 0 1 244.364 69.818H512a34.91 34.91 0 0 1 0 69.818H244.364a104.96 104.96 0 0 0-104.728 104.728v535.272a104.96 104.96 0 0 0 104.728 104.728h535.272a104.96 104.96 0 0 0 104.728-104.728V512a34.91 34.91 0 0 1 69.818 0v267.636a174.778 174.778 0 0 1-174.546 174.546z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M500.364 558.545a35.142 35.142 0 0 1-24.67-10.24 34.676 34.676 0 0 1 0-49.338l418.91-418.909a34.91 34.91 0 0 1 49.338 49.338l-418.91 418.91a35.142 35.142 0 0 1-24.668 10.24z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M919.273 139.636H733.09a34.91 34.91 0 0 1 0-69.818h186.182a34.91 34.91 0 0 1 0 69.818z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M919.273 325.818a34.91 34.91 0 0 1-34.91-34.909V104.727a34.91 34.91 0 0 1 69.819 0V290.91a34.91 34.91 0 0 1-34.91 34.91z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

Iconfenxiang1.defaultProps = {
  size: 18,
};

Iconfenxiang1 = React.memo ? React.memo(Iconfenxiang1) : Iconfenxiang1;

export default Iconfenxiang1;
