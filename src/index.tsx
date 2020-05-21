import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
  <View style={{ backgroundColor: '#EBEEF8', flex: 1 }}>
    <AppProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#EBEEF8" />
      <Routes />
    </AppProvider>
  </View>
);

export default App;
