import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

// Box
export default React.memo((props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.75 11.0001C16.75 11.4143 16.4142 11.7501 16 11.7501H8C7.58579 11.7501 7.25 11.4143 7.25 11.0001C7.25 10.5859 7.58579 10.2501 8 10.2501H16C16.4142 10.2501 16.75 10.5859 16.75 11.0001Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.38558 8.14682L5.57431 4.89923C5.87389 4.08078 6.60048 3.49431 7.46371 3.37418C10.4734 2.95535 13.5266 2.95535 16.5364 3.37418C17.3996 3.49431 18.1262 4.08079 18.4258 4.89924L19.6146 8.14713C19.8369 8.49401 19.99 8.89054 20.0543 9.31802L20.1563 9.99586C20.5561 12.6545 20.5187 15.3606 20.0456 18.0072C19.8359 19.1805 18.8723 20.0717 17.6862 20.1894L16.4558 20.3115C13.4925 20.6057 10.5074 20.6057 7.54417 20.3115L6.3137 20.1894C5.12763 20.0717 4.16407 19.1805 3.95434 18.0072C3.48127 15.3606 3.44389 12.6545 3.84369 9.99586L3.94562 9.31802C4.00992 8.89042 4.16314 8.49377 4.38558 8.14682ZM7.67046 4.85987C10.543 4.46012 13.4571 4.46012 16.3296 4.85987C16.6437 4.90358 16.9081 5.117 17.0172 5.41483L17.5234 6.79781C17.478 6.7912 17.4323 6.78561 17.3864 6.78105L16.4082 6.68396C13.4766 6.39299 10.5234 6.39299 7.59179 6.68396L6.6136 6.78105C6.56765 6.78561 6.52201 6.7912 6.4767 6.79779L6.98291 5.41482C7.09193 5.11699 7.35633 4.90358 7.67046 4.85987ZM5.68566 8.9011L5.70432 8.90793L5.72747 8.84468C5.97321 8.52882 6.34233 8.31534 6.76175 8.27371L7.73994 8.17662C10.573 7.89543 13.4269 7.89543 16.26 8.17662L17.2382 8.27371C17.6577 8.31535 18.0269 8.52892 18.2726 8.84488L18.2957 8.90793L18.3143 8.90112C18.4454 9.08701 18.5354 9.30456 18.571 9.54108L18.6729 10.2189C19.0484 12.7159 19.0133 15.2575 18.569 17.7432C18.4774 18.2559 18.0563 18.6453 17.5381 18.6967L16.3076 18.8189C13.4429 19.1032 10.5571 19.1032 7.69232 18.8189L6.46186 18.6967C5.9436 18.6453 5.52258 18.2559 5.43094 17.7432C4.98662 15.2575 4.95152 12.7159 5.32701 10.2189L5.42894 9.54108C5.46451 9.30456 5.55453 9.087 5.68566 8.9011Z"
      fill="currentColor"
    />
  </Svg>
));
