import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation';

import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  )
}

/*
Definição de Estilos que podem ser aplicados aos componentes
*/
const styles = StyleSheet.create  ({
  container: {
    flex: 1,
    backgroundColor: '#abf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
