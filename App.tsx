import React from 'react';
import Apploading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'


import theme from './src/global/styles/theme'
import { Dashboard } from './src/pages/Dashboard';
import { ListUsers } from './src/pages/ListUsers';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <Apploading />
  }
  return (
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}
      <ListUsers />
    </ThemeProvider>
  );
}


