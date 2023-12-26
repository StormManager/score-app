import React, { } from 'react';
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NativeBaseProvider } from "native-base";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { TabletProvider } from './context/useIsTablet';
import Screen from './screens';
import Theme from './theme';
import Toast from '~components/Common/Toast';

const queryClient = new QueryClient()


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };



  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <TabletProvider>
          <NavigationContainer>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <SafeAreaProvider>
                <NativeBaseProvider>
                  <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                  />

                  <Screen />
                  <Toast />
                </NativeBaseProvider>
              </SafeAreaProvider>
            </TouchableWithoutFeedback>
          </NavigationContainer>
        </TabletProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}



export default App;
