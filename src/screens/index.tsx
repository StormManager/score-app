import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import LoginScreen, { SCREEN_NAME as LoginScreenName } from './Login';
import MainScreen, { SCREEN_NAME as MainScreenName } from './Main';
import CreateRoom, { PAGE_NAME as CreateRoomPageName } from '../pages/CreateRoom';
import ShareRoom, { PAGE_NAME as ShareRoomPageName } from '../pages/ShareRoom';
import { RootScreenPrams } from '../utils/types/navigation';
import { Dimensions, Platform } from 'react-native';
import { useTablet } from '../context/useIsTablet';


const Root = createNativeStackNavigator<RootScreenPrams>();
const Screen = () => {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = height / width;
  const { setTablet } = useTablet();
  const tablet = Platform.OS === 'android'
    ? aspectRatio < 1.6
    : aspectRatio < 1.5;

  useEffect(() => {
    console.log(tablet, aspectRatio)
    setTablet({ isTablet: tablet, value: "" })
  }, [tablet])
  return (
    <Root.Navigator initialRouteName={LoginScreenName}>
      <Root.Group screenOptions={{ headerShown: false }}>
        <Root.Screen name={LoginScreenName} component={LoginScreen} />
        <Root.Screen name={MainScreenName} component={MainScreen} />
        <Root.Screen name={CreateRoomPageName} component={CreateRoom} />
        <Root.Screen name={ShareRoomPageName} component={ShareRoom} />
      </Root.Group>
    </Root.Navigator>
  );
}
export default Screen