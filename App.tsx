
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions, 
} from 'react-native/Libraries/NewAppScreen';
// import "./nativewind-output";
import Login from './src/screens/login/login' 
import _layout from "./src/screens/layout/layout"
// import { NativeBaseProvider, Box, Button } from "native-base";
import { TamaguiProvider } from '@tamagui/core'
import { Button } from 'tamagui'

// import '@tamagui/core/reset.css'


function App(): React.JSX.Element { 
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []); 
  const backgroundStyle = { 
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,    
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   {/* <_layout/> */}
    //   <ScrollView style={styles.scrollView}>
    //   <Login/>
    //    </ScrollView>
    <TamaguiProvider>
    {/* <View width={200} height={200} backgroundColor="red" /> */}
    <Button>Hello world</Button>
  </TamaguiProvider>
    // </SafeAreaView>
  //   <NativeBaseProvider>
  //   <Box>Hello world wz</Box>
  //   <Button onPress={() => console.log("hello world")}>Click Me</Button>
  // </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
