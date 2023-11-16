import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Screen from './screens';
import { ThemeProvider } from 'styled-components/native';
import Theme from './theme';


const queryClient = new QueryClient()
const { width, height } = Dimensions.get('window');
const aspectRatio = height / width;


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const isTablet =
    Platform.OS === 'android'
      ? aspectRatio < 1.6
      : aspectRatio < 1.5;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <NavigationContainer>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <Screen />
          </SafeAreaView>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}



export default App;
