import React from 'react';
import { View } from 'react-native';
import { MainTabStackProps } from '../../../utils/types/navigation';

export interface IPageProps {
  route: any
}
export const PAGE_NAME = 'T_MYPAGE';
const Pages = ({ route, navigation }: MainTabStackProps<"T_MYPAGE">) => {
  const params = route.params;
  console.log(params)
  return (
    <View />
  );
}

export default Pages;