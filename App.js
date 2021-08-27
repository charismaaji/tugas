import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CRUDRedux from './latihan/CRUDRedux';
import {Provider} from 'react-redux';
import Router from './src/router';
import {Store, Persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
// import Latihan2 from './latihan/CRUDFirestore';
const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
