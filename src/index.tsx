import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useMemo } from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Screen from './screens';
import { ThemeProvider } from 'styled-components/native';
import Theme from './theme';
import { TabletProvider, useTablet } from './context/useIsTablet';


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
              <SafeAreaView style={backgroundStyle}>
                <StatusBar
                  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                  backgroundColor={backgroundStyle.backgroundColor}
                />

                <Screen />

              </SafeAreaView>
            </TouchableWithoutFeedback>
          </NavigationContainer>
        </TabletProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}



export default App;
