import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Main, { PAGE_NAME as MainPageName } from '../../pages/Main';

const MainRoot = createNativeStackNavigator();

export const SCREEN_NAME = 'S_MAIN'

export default function MainScreen() {
  return (
    <MainRoot.Navigator>
      <MainRoot.Group>
        <MainRoot.Screen name={MainPageName} component={Main} />
      </MainRoot.Group>
    </MainRoot.Navigator>
  );
}