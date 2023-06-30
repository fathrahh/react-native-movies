import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

// Calendar
export default React.memo((props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.00006 3.25C7.41427 3.25 7.75006 3.58579 7.75006 4V5.66763C10.5778 5.4158 13.4223 5.4158 16.2501 5.66763V4C16.2501 3.58579 16.5858 3.25 17.0001 3.25C17.4143 3.25 17.7501 3.58579 17.7501 4V5.81644C19.2431 6.02754 20.4226 7.20847 20.6223 8.71484L20.7089 9.36779C21.0729 12.1141 21.0414 14.8984 20.6155 17.6359C20.4045 18.9919 19.3028 20.0335 17.9371 20.1681L16.7441 20.2858C13.589 20.5969 10.411 20.5969 7.25599 20.2858L6.06298 20.1681C4.69724 20.0335 3.59558 18.9919 3.38457 17.6359C2.95861 14.8984 2.92717 12.1141 3.29121 9.36779L3.37776 8.71484C3.57744 7.20845 4.75699 6.02751 6.25006 5.81643V4C6.25006 3.58579 6.58585 3.25 7.00006 3.25ZM7.44523 7.2028C10.4744 6.90408 13.5256 6.90408 16.5548 7.2028L17.4603 7.2921C18.327 7.37757 19.0209 8.04854 19.1353 8.91194L19.2219 9.56489C19.2521 9.793 19.2795 10.0214 19.3039 10.25H4.69612C4.72061 10.0214 4.74797 9.79301 4.7782 9.5649L4.86475 8.91194C4.9792 8.04854 5.67303 7.37757 6.53977 7.2921L7.44523 7.2028ZM4.57689 11.75C4.47871 13.6381 4.57544 15.5332 4.86674 17.4052C4.97258 18.0854 5.52515 18.6078 6.21019 18.6754L7.4032 18.793C10.4603 19.0945 13.5397 19.0945 16.5969 18.793L17.7899 18.6754C18.4749 18.6078 19.0275 18.0854 19.1333 17.4052C19.4246 15.5332 19.5214 13.6381 19.4232 11.75H4.57689Z"
      fill="currentColor"
    />
  </Svg>
));
