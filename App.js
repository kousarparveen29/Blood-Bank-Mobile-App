/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { Provider } from 'react-redux';
// import store from './src/store'
import AppNavigation from './src/config/Navigation';
// import DonorList from './src/screens/DonorList'


function App() {
    return(
      // <Provider store={store}>
        <AppNavigation />
        /* < DonorList /> */
      // </Provider>
    )
}

        
            

export default App;
