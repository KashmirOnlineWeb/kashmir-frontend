import type { NextPage } from 'next';

type HeartPackages = {
  isFilled?: string;
  onClick: any;
  color?: string;
};
const Heart: NextPage<HeartPackages> = ({
  isFilled,
  color = '#ff0000',
  onClick,
}) => {
  return (
    <svg
      stroke={isFilled ? color : 'currentColor'}
      fill={isFilled ? color : 'transparent'}
      strokeWidth="2px"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      onClick={onClick}
    >
      <path d="M16.7 3.5a5.28 5.28 0 0 0-4.69 2.81A5.28 5.28 0 0 0 7.32 3.5a5.22 5.22 0 0 0-5.27 5.16c0 5.63 9.96 12.01 9.96 12.01s9.96-6.38 9.96-12.01A5.22 5.22 0 0 0 16.7 3.5Z" />
    </svg>
  );
};
export default Heart;
