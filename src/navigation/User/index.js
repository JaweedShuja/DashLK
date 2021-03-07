import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import User_Splash from '../../screens/User/Splash';
import User_SignIn from '../../screens/User/SignIn';
import User_SignUp from '../../screens/User/SignUp';
import User_Dashboard from '../../screens/User/Dashboard';
import User_FindResult from '../../screens/User/FindResult';
import User_SearchResult from '../../screens/User/SearchResult';
import User_Profile from '../../screens/User/Profile';
import User_ScaneCoupon from '../../screens/User/ScaneCoupon';
import User_CouponsAvailable from '../../screens/User/CouponsAvailable';
import User_CouponsUsed from '../../screens/User/CouponsUsed';
import User_Notification from '../../screens/User/Notification';
import User_Confirmation from '../../screens/User/Confirmation';
import User_ProductDetails from '../../screens/User/ProductDetails';
import User_Checkout from '../../screens/User/Checkout';
import User_Store from '../../screens/User/Store';
import User_Chat from '../../screens/User/Chat';
import User_WishList from '../../screens/User/WishList';
import User_CancelOrder from '../../screens/User/CancelOrder';
import User_PlaceOrder from '../../screens/User/PlaceOrder';
import User_Settings from '../../screens/User/Settings';
import User_Orders from '../../screens/User/Orders';
import User_OrderDetails from '../../screens/User/OrderDetails';
import User_DeliveryDetails from '../../screens/User/DeliveryDetails';
import User_AddDeliveryDetails from '../../screens/User/AddDeliveryDetails';
import User_ConfirmDelivery from '../../screens/User/ConfirmDelivery';
import User_LeaveFeedback from '../../screens/User/LeaveFeedBack';
import User_Cart from '../../screens/User/Cart';
import User_ToBeDelivered from '../../screens/User/ToBeDelivered';
import User_ToBeReviewed from '../../screens/User/ToBeReviewed';
import User_Delivered from '../../screens/User/Delivered';
import User_ReturnOrderConfirmation from '../../screens/User/ReturnOrderConfirmation';
import User_ForgotPassword from '../../screens/User/ForgotPassword';
import User_CreatePassword from '../../screens/User/CreatePassword';
import User_OrderRatedConfirmation from '../../screens/User/OrderRatedConfirmation';
import User_PaymentMethod from '../../screens/User/PaymentMethod';

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

// import User_CouponDectedModal from './src/components/CouponDetectedModal';
// import User_CancelOrderModal from './src/components/CancelOrderModal';
// import User_ReturnOrderModal from './src/components/ReturnOrderModal';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User_Splash" headerMode="none">
        <Stack.Screen name="User_Splash" component={User_Splash} />
        {/* done */}
        <Stack.Screen name="User_SignIn" component={User_SignIn} />
        {/* done sign up button remain */}
        <Stack.Screen name="User_SignUp" component={User_SignUp} />
        {/* done */}
        <Stack.Screen name="User_Dashboard" component={User_Dashboard} />
        {/* done */}
        <Stack.Screen name="User_FindResult" component={User_FindResult} />
        {/* done */}
        <Stack.Screen name="User_SearchResult" component={User_SearchResult} />
        {/* done */}
        <Stack.Screen name="User_Profile" component={User_Profile} />
        {/* done */}
        <Stack.Screen name="User_ScaneCoupon" component={User_ScaneCoupon} />
        <Stack.Screen name="User_CouponsAvailable" component={User_CouponsAvailable}/>
        {/* done */}
        <Stack.Screen name="User_CouponsUsed" component={User_CouponsUsed} />
        {/* done */}
        <Stack.Screen name="User_Notification" component={User_Notification} />
        {/* done */}
        <Stack.Screen name="User_Confirmation" component={User_Confirmation} />
        {/* done */}
        <Stack.Screen name="User_ProductDetails" component={User_ProductDetails}/>
        {/* done */}
        <Stack.Screen name="User_Checkout" component={User_Checkout} />
        {/* done */}
        <Stack.Screen name="User_Store" component={User_Store} /> 
        {/* done */}
        <Stack.Screen name="User_Chat" component={User_Chat} />
        {/* done */}
        <Stack.Screen name="User_WishList" component={User_WishList} />
        {/* done */}
        <Stack.Screen name="User_CancelOrder" component={User_CancelOrder} />
        {/* done */}
        <Stack.Screen name="User_PlaceOrder" component={User_PlaceOrder} />
        {/* done */}
        <Stack.Screen name="User_Settings" component={User_Settings} />
        {/* done */}
        <Stack.Screen name="User_Orders" component={User_Orders} />
        {/* done */}
        <Stack.Screen name="User_OrderDetails" component={User_OrderDetails} />
        {/* done */}
        <Stack.Screen name="User_DeliveryDetails" component={User_DeliveryDetails}/>
        {/* done */}
        <Stack.Screen name="User_AddDeliveryDetails" component={User_AddDeliveryDetails}/>
        {/* done */}
        <Stack.Screen name="User_ConfirmDelivery" component={User_ConfirmDelivery}/>
        {/* done */}
        <Stack.Screen name="User_LeaveFeedback" component={User_LeaveFeedback}/>
        {/* done */}
        <Stack.Screen name="User_Cart" component={User_Cart} />
        {/* done */}
        <Stack.Screen name="User_ToBeDelivered" component={User_ToBeDelivered}/>
        {/* done */}
        <Stack.Screen name="User_ToBeReviewed" component={User_ToBeReviewed} />
        {/* done */}
        <Stack.Screen name="User_Delivered" component={User_Delivered} />
        {/* done */}
        <Stack.Screen name="User_ReturnOrderConfirmation" component={User_ReturnOrderConfirmation}/>
        {/* done */}
        <Stack.Screen name="User_ForgotPassword" component={User_ForgotPassword}/>
        {/* done */}
        <Stack.Screen name="User_CreatePassword" component={User_CreatePassword}/>
        {/* done */}
        <Stack.Screen name="User_OrderRatedConfirmation" component={User_OrderRatedConfirmation}/>
        {/* done */}
        <Stack.Screen name="User_PaymentMethod" component={User_PaymentMethod}/>
        {/* done */}



        <Stack.Screen name="Station_SignUp" component={Station_SignUp} />
        {/* done */}
        <Stack.Screen name="Station_Dashboard" component={Station_Dashboard} />
        {/* done */}
        <Stack.Screen name="Station_CreateQuotation" component={Station_CreateQuotation}/>
        {/* done */}
        <Stack.Screen name="Station_QuotationRequested" component={Station_QuotationRequested}/>
        {/* done */}
        <Stack.Screen name="Station_QuotationDetails" component={Station_QuotationDetails}/>
        {/* done */}
        <Stack.Screen name="Station_MyPoints" component={Station_MyPoints} />
        {/* done */}
        <Stack.Screen name="Station_AllOrders" component={Station_AllOrders} />
        {/* done */}
        <Stack.Screen name="Station_FAQ" component={Station_FAQ} />
        {/* done */}
        <Stack.Screen name="Station_Profile" component={Station_Profile} />
        {/* done */}
        <Stack.Screen name="Station_Settings" component={Station_Settings} />
        {/* done */}


        <Stack.Screen name="Shop_Dashboard" component={Shop_Dashboard} />
        {/* done */}
        <Stack.Screen name="Shop_PaidDispatchNow" component={Shop_PaidDispatchNow} />
        {/* done */}
        <Stack.Screen name="Shop_ActiveListings" component={Shop_ActiveListings}/>
        {/* done */}
        <Stack.Screen name="Shop_AwaitingDelivery" component={Shop_AwaitingDelivery} />
        {/* done */}
        <Stack.Screen name="Shop_AllOrders" component={Shop_AllOrders} />
        {/* done */}
        <Stack.Screen name="Shop_ItemDetails" component={Shop_ItemDetails} />
        {/* done */}
        <Stack.Screen name="Shop_DashStickers" component={Shop_DashStickers} />
        {/* done */}
        <Stack.Screen name="Shop_StoreRegisteration" component={Shop_StoreRegisteration} />
        {/* done */}
        <Stack.Screen name="Shop_PendingApproval" component={Shop_PendingApproval} />
        <Stack.Screen name="Shop_Registeration" component={Shop_Registeration} />
        <Stack.Screen name="Shop_CreateItem" component={Shop_CreateItem} />
        {/* done */}
        <Stack.Screen name="Shop_Profile" component={Shop_Profile} />
        {/* done */}
        <Stack.Screen name="Shop_Earning" component={Shop_Earning} />
        {/* done */}
        <Stack.Screen name="Shop_Settings" component={Shop_Settings} />
        {/* done */}
        <Stack.Screen name="Shop_DisapprovedItems" component={Shop_DisapprovedItems} />
        {/* done */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
