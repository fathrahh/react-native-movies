import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

export default function Refresh(props: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.54543 8.16265C6.33021 8.10587 6.15133 7.95643 6.05716 7.75474C5.963 7.55305 5.96329 7.31996 6.05795 7.11851L7.7187 3.58412C7.84246 3.32073 8.10742 3.15272 8.39843 3.15308C8.68944 3.15344 8.95398 3.32211 9.07709 3.5858L9.80971 5.15504C9.83591 5.14474 9.86295 5.13581 9.89078 5.12836C14.2381 3.96349 18.7067 6.5434 19.8715 10.8907C21.0364 15.2381 18.4565 19.7066 14.1091 20.8715C9.7618 22.0364 5.29326 19.4565 4.12839 15.1091C3.75797 13.7267 3.7663 12.3298 4.09074 11.0311C4.19112 10.6292 4.59828 10.3848 5.00015 10.4852C5.40201 10.5856 5.6464 10.9927 5.54602 11.3946C5.28172 12.4526 5.27444 13.5907 5.57728 14.7209C6.52774 18.268 10.1738 20.3731 13.7209 19.4226C17.2681 18.4722 19.3731 14.8261 18.4226 11.279C17.4877 7.78982 13.9447 5.69601 10.4531 6.53307L11.1923 8.11637C11.3154 8.38006 11.2748 8.69116 11.0882 8.91449C10.9017 9.13783 10.6027 9.23307 10.3214 9.15883L6.54543 8.16265Z"
        fill="currentColor"
      />
    </Svg>
  );
}