import React, { HTMLAttributes } from 'react';
import { Icon } from './style';

export const Trash: React.FC<HTMLAttributes<HTMLSpanElement>> = ({
  ...rest
}) => {
  return (
    <Icon {...rest}>
      <svg
        width="73"
        height="71"
        viewBox="0 0 73 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.7 67.47H68.51"
          stroke="#99B876"
          strokeWidth="7"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 15L52.41 30.21"
          stroke="#99B876"
          strokeWidth="7"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39.26 6.9901C42.02 3.6201 46.98 3.13009 50.35 5.89009C50.54 6.04009 50.72 6.20009 50.89 6.37009L56.52 10.7801C60.22 13.0601 61.37 17.9201 59.09 21.6201C58.97 21.8201 58.8399 22.0101 58.6999 22.2001L25.14 65.0101C24.02 66.4401 22.31 67.2901 20.48 67.3101L7.53003 67.4801L4.60998 54.8701C4.19998 53.1001 4.60998 51.2301 5.72998 49.8001L39.26 6.9901Z"
          stroke="#1F3341"
          strokeWidth="7"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        width="73"
        height="73"
        viewBox="0 0 73 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.7923 64.6116H45.7522C43.4822 64.6316 41.6623 66.4816 41.6723 68.7516C41.6523 71.0216 43.4822 72.8816 45.7522 72.9016H68.7923C71.0623 72.8816 72.8922 71.0316 72.8722 68.7616C72.8922 66.4816 71.0623 64.6316 68.7923 64.6116Z"
          fill="#99B876"
        />
        <path
          d="M29.6022 15.8415L51.4622 33.4915C51.9922 33.9215 52.0823 34.6915 51.6723 35.2315L25.7623 68.9715C24.1823 71.0215 21.7523 72.2415 19.1623 72.2815L5.02226 72.4515C4.26226 72.4515 3.60217 71.9315 3.43217 71.1915L0.222214 57.2215C-0.367786 54.6715 0.232209 51.9915 1.84221 49.9315L27.8722 16.0415C28.2822 15.5115 29.0422 15.4115 29.5722 15.8215C29.5922 15.8315 29.5922 15.8315 29.6022 15.8415Z"
          fill="#1F3341"
        />
        <path
          d="M61.2222 22.9715L57.0123 28.2315C56.5923 28.7615 55.8323 28.8514 55.3023 28.4314C55.3023 28.4314 55.3023 28.4314 55.2923 28.4214C50.1723 24.2814 37.0722 13.6515 33.4322 10.7015C32.8922 10.2715 32.8122 9.48147 33.2422 8.95147L33.2522 8.94146L37.3023 3.90145C40.9023 -0.58855 47.4522 -1.30854 51.9422 2.29146C52.1722 2.48146 52.4022 2.67146 52.6122 2.88146L58.5622 7.62145C60.8922 9.37145 62.5222 11.8814 63.1922 14.7114C63.8422 17.6114 63.1122 20.6615 61.2222 22.9715Z"
          fill="#99B876"
        />
      </svg>
    </Icon>
  );
};
export default Trash;
