import React, { useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen, { SCREEN_NAME as LoginScreenName } from './Login';
import MainScreen from './Main';
import { useTablet } from '../context/useIsTablet';
import AddScore from "../pages/AddScore"
import CreateRoom from '../pages/CreateRoom';
import ShareRoom from '../pages/ShareRoom';
import { RootScreenPrams } from '../utils/types/navigation';


const Root = createNativeStackNavigator<RootScreenPrams>();
const Screen = () => {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = height / width;
  const { setTablet } = useTablet();
  const tablet = Platform.OS === 'android'
    ? aspectRatio < 1.6
    : aspectRatio < 1.5;

  useEffect(() => {
    setTablet({ isTablet: tablet, value: "" })
  }, [setTablet, tablet])
  return (
    <Root.Navigator initialRouteName={LoginScreenName}>
      <Root.Group screenOptions={{ headerShown: false }}>
        <Root.Screen name={"S_LOGIN"} component={LoginScreen} />
        <Root.Screen name={"S_MAIN"} component={MainScreen} />
        <Root.Screen name={"P_CREATE_ROOM"} component={CreateRoom} />
        <Root.Screen name={"P_SHARE_ROOM"} component={ShareRoom} />
        <Root.Screen name={"P_ADD_SCORE"} component={AddScore} />
      </Root.Group>
    </Root.Navigator>
  );
}
export default Screen