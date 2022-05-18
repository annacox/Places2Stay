import * as React from 'react';
import {Path, Svg} from 'react-native-svg';

import {SvgProps} from '../Icon.types';

const Home: React.FC<SvgProps> = ({color, style}) => {
  return (
    <Svg
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={color}
      style={style}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Svg>
  );
};

export default Home;
