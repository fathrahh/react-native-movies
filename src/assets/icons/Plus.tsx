import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

export default function Plus(props: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 17V7"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M7 12L17 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
}
