/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconwancheng = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M774.47 800.907q8.948-24.855 30.82-33.306t42.254-3.48 32.311 22.867 1.989 44.74q-11.93 32.808-37.283 71.582t-71.582 69.097-115.825 44.74-168.02-1.492q-68.6-11.93-129.247-28.832t-108.368-34.3-79.537-31.317-41.756-18.89l-3.977 3.977-14.913-384.757q6.96-70.589 15.907-138.195 3.977-28.831 8.45-59.155t9.446-60.149 9.942-57.167 10.936-49.213q12.925-53.687 38.774-74.565t50.704-18.393 42.751 22.867 15.907 49.213q-1.988 19.884-6.959 58.658t-11.433 84.507-13.422 92.958-12.925 83.016q10.936-29.826 25.85-68.6t33.305-81.524 39.271-86 42.254-81.524 43.745-67.606 43.248-44.242Q538.844-1.415 568.67 0.076t46.23 17.896 17.896 40.762-13.422 42.254q-16.901 17.895-37.283 58.658t-40.265 82.519Q518.96 290.88 496.093 347.55q35.791-36.785 73.57-69.594 31.815-28.832 70.59-57.664t74.565-45.733q34.797-16.902 65.12-15.908t47.225 14.416 15.41 35.295-30.323 45.733q-13.92 11.93-33.306 28.832t-41.26 36.288-45.236 40.763-45.236 41.26q-51.699 47.72-108.368 98.425 88.484-22.866 163.049-21.872 31.814 0 63.629 5.468t58.658 18.89 46.728 35.791 27.837 57.167q9.942 44.74 1.492 74.565t-25.85 41.757-38.276 2.982-35.792-42.75q-13.919-33.803-27.34-46.728t-28.335-13.919-31.318 5.468-37.282 11.434q-13.92 2.982-31.318 12.924t-33.306 24.358-28.334 31.318-15.908 34.3 2.983 32.809 29.329 26.346q33.803 16.901 62.138 28.335t50.704 14.416 38.277-3.977 23.86-27.838z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconwancheng.defaultProps = {
  size: 18,
};

Iconwancheng = React.memo ? React.memo(Iconwancheng) : Iconwancheng;

export default Iconwancheng;
