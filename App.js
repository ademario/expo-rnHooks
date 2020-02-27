import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation';

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider> 
  );
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
