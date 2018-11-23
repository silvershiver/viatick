import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from './src/store/configureStore1';
import { Provider } from 'react-redux';

const store = configureStore();

const iDynastyApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('iDynasty', () => iDynastyApp);
