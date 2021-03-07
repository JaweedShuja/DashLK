import React, {Component} from 'react';
import {View, Text} from 'react-native';

import UserFlow from './src/navigation/User';
import StationFlow from './src/navigation/Station';
import ShopFlow from './src/navigation/Shop'

class App extends Component {
  render() {
    return <UserFlow />;
  }
}

export default App;