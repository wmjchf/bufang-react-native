/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icondiyi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M657.213 692.01c198.527-34.618 302.065-272.62 302.065-485.913H796.361c9.62-68.77 15.646-124.14 15.646-143.373H213.834c3.317 36.776 7.833 87.304 14.016 143.373H63.993c0 216.193 104.93 453.824 307.677 486.46 32.153 41.289 56.08 58.536 83.364 67.989v47.786h-115.77l-86.838 152.96h520.99L686.58 808.333H570.805v-47.786c25.028-6.397 57.28-33.258 86.408-68.536z m58.318-93.97c24.752-57.707 52.938-207.107 72.41-334.572h60.302c0 179.8-78.46 313.974-135.834 341.377 1.042-2.277 2.14-4.551 3.122-6.805zM175.244 263.469h59.318c15.94 128.166 40.496 269.923 78.457 341.552-58.14-26.843-137.775-161.753-137.775-341.552z m224.594 299.953v-60.116h75.556V271.492l-77.661 17.545v-61.989l153.217-32.28v308.538h75.088v60.117h-226.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondiyi.defaultProps = {
  size: 18,
};

Icondiyi = React.memo ? React.memo(Icondiyi) : Icondiyi;

export default Icondiyi;
