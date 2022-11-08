/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createTheme, ThemeProvider } from '@rneui/themed';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme1 } from './core/utils/theme.json';
import React, { useEffect, type PropsWithChildren } from 'react';
import {
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { navigationRef } from './core/service/navigation/navigation.service';
import { AppRoute } from './routes/app.route';
import Toast from 'react-native-toast-message';
import { toastConfig } from './core/helpers/ToastConfig';
const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});
const App = () => {
  LogBox.ignoreAllLogs()
  useEffect(() => {

  }, [])


  return <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider

      {...eva}
      theme={{ ...eva.light, ...theme1 }}
    >
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            {<AppRoute />}
            <Toast config={toastConfig} />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>

    </ApplicationProvider>
  </>

};


export default App;
