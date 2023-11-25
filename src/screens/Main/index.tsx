import React, { useMemo } from 'react';
import Share, { PAGE_NAME as ShareName } from '../../pages/MainTab/Share';
import Container, { PAGE_NAME as ContainerName } from '../../pages/MainTab/Container';
import MyPage, { PAGE_NAME as MyPageName } from '../../pages/MainTab/MyPage';
import { MainTabParam } from '../../utils/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainTabBar from '../../layouts/MainTabBar';
import { useTablet } from '../../context/useIsTablet';
import { Dimensions, Platform } from 'react-native';

const MainRoot = createBottomTabNavigator<MainTabParam>();

export const SCREEN_NAME = 'S_MAIN'


export default function MainScreen() {

  return (
    <MainRoot.Navigator tabBar={(props) => <MainTabBar {...props} />} >
      <MainRoot.Group screenOptions={{ headerShown: false }}>
        <MainRoot.Screen name={ShareName} component={Share} />
        <MainRoot.Screen name={ContainerName} component={Container} />
        <MainRoot.Screen name={MyPageName} component={MyPage} />
      </MainRoot.Group>
    </MainRoot.Navigator >
  );
}
