/* eslint-disable import/no-extraneous-dependencies */
import { Icon } from '@iconify/react';
import type { NextPage } from 'next';

type FormContainerType = {
  groupName?: any;
  className?: string;
};
const PackageIcon: NextPage<FormContainerType> = ({ groupName, className }) => {
  return <Icon icon={groupName} className={` w-[24px] h-[24px] max-h-[24px] ${className}`} />;
};
export default PackageIcon;
