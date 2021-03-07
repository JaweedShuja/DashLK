import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Shop_Dashboard from '../../screens/Shop/Dashboard'
import Shop_PaidDispatchNow from '../../screens/Shop/PaidDispatchNow'
import Shop_ActiveListings from '../../screens/Shop/ActiveListinings'
import Shop_AwaitingDelivery from '../../screens/Shop/AwaitingDelivery'
import Shop_AllOrders from '../../screens/Shop/AllOrders'
import Shop_ItemDetails from '../../screens/Shop/ItemDetails'
import Shop_DashStickers from '../../screens/Shop/DashStickers'
import Shop_StoreRegisteration from '../../screens/Shop/StoreRegisteration'
import Shop_PendingApproval from '../../screens/Shop/PendingApproval'
import Shop_Registeration from '../../screens/Shop/Registeration'
import Shop_Profile from '../../screens/Shop/Profile'
import Shop_Settings from '../../screens/Shop/Settings'
import Shop_DisapprovedItems from '../../screens/Shop/DisapprovedItems'
import Shop_CreateItem from '../../screens/Shop/CreateItem'
import Shop_Earning from '../../screens/Shop/Earnings'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Shop_DisapprovedItems" headerMode="none">
        <Stack.Screen name="Shop_Dashboard" component={Shop_Dashboard} />
        <Stack.Screen name="Shop_PaidDispatchNow" component={Shop_PaidDispatchNow} />
        <Stack.Screen name="Shop_ActiveListings" component={Shop_ActiveListings}/>
        <Stack.Screen name="Shop_AwaitingDelivery" component={Shop_AwaitingDelivery} />
        <Stack.Screen name="Shop_AllOrders" component={Shop_AllOrders} />
        <Stack.Screen name="Shop_ItemDetails" component={Shop_ItemDetails} />
        <Stack.Screen name="Shop_DashStickers" component={Shop_DashStickers} />
        <Stack.Screen name="Shop_StoreRegisteration" component={Shop_StoreRegisteration} />
        <Stack.Screen name="Shop_PendingApproval" component={Shop_PendingApproval} />
        <Stack.Screen name="Shop_Registeration" component={Shop_Registeration} />
        <Stack.Screen name="Shop_CreateItem" component={Shop_CreateItem} />
        <Stack.Screen name="Shop_Profile" component={Shop_Profile} />
        <Stack.Screen name="Shop_Earning" component={Shop_Earning} />
        <Stack.Screen name="Shop_Settings" component={Shop_Settings} />
        <Stack.Screen name="Shop_DisapprovedItems" component={Shop_DisapprovedItems} />
        {/* done till now */}
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
