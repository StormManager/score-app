import React from 'react';
import { View } from 'react-native';
import { MainTabStackProps } from '../../../utils/types/navigation';

export interface IPageProps {
  route: any
}
export const PAGE_NAME = 'T_CONTAINER';
const Pages = ({ route, navigation }: MainTabStackProps<"T_CONTAINER">) => {
  const params = route.params;
  return (
    <View />
  );
}

export default Pages;