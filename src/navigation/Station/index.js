import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Station_SignUp from '../../screens/Station/SignUp';
import Station_Dashboard from '../../screens/Station/Dashboard';
import Station_CreateQuotation from '../../screens/Station/CreateQuotation';
import Station_QuotationRequested from '../../screens/Station/QuotationRequested';
import Station_QuotationDetails from '../../screens/Station/QuotationDetails';
import Station_MyPoints from '../../screens/Station/MyPoints';
import Station_AllOrders from '../../screens/Station/AllOrders';
import Station_FAQ from '../../screens/Station/FAQ';
import Station_Profile from '../../screens/Station/Profile';
import Station_Settings from '../../screens/Station/Settings';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Station_Dashboard" headerMode="none">
        <Stack.Screen name="Station_SignUp" component={Station_SignUp} />
        <Stack.Screen name="Station_Dashboard" component={Station_Dashboard} />
        <Stack.Screen name="Station_CreateQuotation" component={Station_CreateQuotation}/>
        <Stack.Screen name="Station_QuotationRequested" component={Station_QuotationRequested}/>
        <Stack.Screen name="Station_QuotationDetails" component={Station_QuotationDetails}/>
        <Stack.Screen name="Station_MyPoints" component={Station_MyPoints} />
        <Stack.Screen name="Station_AllOrders" component={Station_AllOrders} />
        <Stack.Screen name="Station_FAQ" component={Station_FAQ} />
        <Stack.Screen name="Station_Profile" component={Station_Profile} />
        <Stack.Screen name="Station_Settings" component={Station_Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
