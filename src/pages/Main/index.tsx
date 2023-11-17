import * as React from 'react';
import { View } from 'react-native';

export interface IPageProps {
  route: any
}
export const PAGE_NAME = 'P_HOME';
const Pages = ({ route }: IPageProps) => {
  const params = route.params;
  console.log(params)
  return (
    <View />
  );
}

export default Pages;