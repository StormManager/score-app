import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import LoginScreen, { SCREEN_NAME as LoginScreenName } from './Login';
import MainScreen, { SCREEN_NAME as MainScreenName } from './Main';


const Root = createNativeStackNavigator();
const Screen = () => {
  return (
    <Root.Navigator initialRouteName={LoginScreenName}>
      <Root.Group screenOptions={{ headerShown: false }}>
        <Root.Screen name={LoginScreenName} component={LoginScreen} />
        <Root.Screen name={MainScreenName} component={MainScreen} />
      </Root.Group>
    </Root.Navigator>
  );
}
export default Screen