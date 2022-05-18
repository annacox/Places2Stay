import * as React from 'react';
import Svg from 'react-native-svg';

import component from './Icon.component';

import {IconProps, IconSize, SvgProps} from './Icon.types';

const sizeMap: {[k in IconSize]: number} = {
  large: 32,
  medium: 28,
  small: 24,
};

const SvgComponent: React.FC<IconProps> = ({
  color: colorProp = '#000000',
  name,
  style,
  size = 'medium',
  strokeWidth = 1,
}) => {
  const Component = component[name] as React.FC<SvgProps>;
  const resultingSize = sizeMap[size];

  return (
    <Svg
      width={resultingSize}
      height={resultingSize}
      viewBox="0 0 24 24"
      fill="none"
      style={style}>
      <Component color={colorProp} strokeWidth={strokeWidth} />
    </Svg>
  );
};

export default SvgComponent;
