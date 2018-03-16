import { AppRegistry } from 'react-native';
import React from "react";
import App from './src/App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from './src/redux/reducers/CalendarReducer';

//create store with the calendar reducer
const store=createStore(reducers);

const AppContainer=()=>
  <Provider store={store}>
  <App/>
  </Provider>

AppRegistry.registerComponent('calendar', () => AppContainer);
