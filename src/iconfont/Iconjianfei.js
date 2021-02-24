/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconjianfei = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 676.1c-13.4 0-327.5-0.6-327.5-57.5 0-25.3 60.8-42.8 180.7-52.1 5.3-0.4 10.1 3.6 10.5 9 0.4 5.4-3.6 10.1-9 10.5-119.6 9.3-157.2 26.4-162.3 32.7 10.9 15.8 124.3 37.9 307.6 37.9 183.4 0 296.8-22.1 307.6-37.9-6.7-9.2-59.4-25.8-178.2-33.8-5.4-0.4-9.5-5-9.1-10.4 0.4-5.4 4.9-9.3 10.4-9.1 130.6 8.8 196.8 26.7 196.8 53.3 0 56.7-314.1 57.4-327.5 57.4z"
        fill={getIconColor(color, 0, '#603813')}
      />
      <Path
        d="M262 828.6c-2.7 0-5.3-1.1-7.3-3.2-3.6-4-3.3-10.2 0.7-13.8C429.8 654.5 337 464.2 333 456.2c-2.4-4.8-0.5-10.7 4.3-13.1 4.8-2.5 10.7-0.5 13.1 4.3 1.1 2.1 103.7 211.5-82 378.8-1.8 1.5-4.1 2.4-6.4 2.4z m482.4 0c-2.3 0-4.7-0.8-6.5-2.5-185.7-167.3-83-376.7-82-378.8 2.4-4.8 8.3-6.8 13.1-4.3 4.8 2.4 6.7 8.3 4.3 13.1-4 8-96.8 198.3 77.6 355.4 4 3.6 4.3 9.8 0.7 13.8-1.8 2.2-4.5 3.3-7.2 3.3z"
        fill={getIconColor(color, 1, '#603813')}
      />
      <Path
        d="M615.6 206.5c0 62.1-50.3 112.4-112.4 112.4s-112.4-50.3-112.4-112.4l-53-1.3s-17 54.1-66 104.7c-50.5 52.1 0.4 139.1 88.4 139.1s127.9 0.2 127.9 0.2h30.3s39.9-0.2 127.9-0.2 138.9-86.9 88.4-139.1c-49-50.6-66-104.7-66-104.7l-53.1 1.3z"
        fill={getIconColor(color, 2, '#F6AEB1')}
      />
      <Path
        d="M488.1 458.9c-0.1 0-40-0.2-127.9-0.2-50.1 0-93.8-26.6-111.2-67.7-13.2-31.2-7.3-64.1 15.8-88 46.6-48.1 63.5-100.3 63.7-100.8 1.3-4.1 5.1-6.8 9.3-6.8h0.2l53 1.3c5.3 0.1 9.5 4.5 9.5 9.8 0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-5.3 4.2-9.6 9.5-9.8l53-1.3h0.2c4.3 0 8 2.8 9.3 6.8 0.2 0.5 17 52.7 63.7 100.8 23.1 23.9 29 56.8 15.8 88-17.4 41.1-61.1 67.7-111.2 67.7-87.9 0-127.9 0.2-127.9 0.2h-30zM344.6 215.1c-6.4 16.7-25.6 60.1-65.8 101.5-17.7 18.3-22.1 42.6-11.8 66.7 11.8 27.8 45.1 55.8 93.2 55.8 88 0 128 0.2 128 0.2h30.2s39.9-0.2 127.9-0.2c48.1 0 81.4-28 93.2-55.8 10.2-24.1 5.9-48.4-11.8-66.7-40.2-41.5-59.4-84.9-65.8-101.5l-36.9 0.9c-4.9 62.9-57.7 112.6-121.8 112.6S386.3 279 381.4 216l-36.8-0.9zM504.3 752.4c-0.5 0-1 0-1.6-0.1-5.3-0.9-9-5.9-8.1-11.2 2.5-15.7 0.3-33.8 0.3-33.9-0.7-5.4 3.2-10.2 8.5-10.9 5.4-0.6 10.2 3.1 10.9 8.5 0.1 0.8 2.5 21-0.4 39.4-0.7 4.8-4.8 8.2-9.6 8.2z"
        fill={getIconColor(color, 3, '#603813')}
      />
    </Svg>
  );
};

Iconjianfei.defaultProps = {
  size: 18,
};

Iconjianfei = React.memo ? React.memo(Iconjianfei) : Iconjianfei;

export default Iconjianfei;
