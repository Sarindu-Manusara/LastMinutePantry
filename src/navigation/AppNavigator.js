import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons

// Import your screens
import OnboardScreenVendor from '../screens/Vendor/OnboardScreenVendor';
import VendorDashboard from '../screens/Vendor/VendorDashboard';
import VendorProducts from '../screens/Vendor/VendorProducts';
import VendorAddProductsForms from '../screens/Vendor/VendorAddProductsForms';
import EditProductsForms from '../screens/Vendor/EditProductsForm';
import LaunchScreen from '../screens/LaunchScreen';
import OnboardingChoosingScreen from '../screens/OnboardChoosingScreen';
import OnboardingScreen from '../screens/Customer/OnboardingScreen';
import OnboardingScreen2 from '../screens/Customer/OnboardingScreen2';
import OnboardingScreen3 from '../screens/Customer/OnboardingScreen3';
import VendorManagerAddVendorScreen from '../screens/Vendor/Admin/VendorManagerAddVendorScreen';
import AdminLoginForm from '../screens/Authentication/AdminLoginForm';
import VendorManagerScreenVendor from '../screens/Vendor/Admin/VendorManagerScreenVendor';
import VendorDetailsPageVendorM from '../screens/Vendor/Admin/VendorDetailsPageVendorM';
import VendorManagerEditVendor from '../screens/Vendor/Admin/VendorManagerEditVendor';
import UserRegistrationCustomer from '../screens/Customer/UserRegistrationCustomer';
import UserLoginCustomer from '../screens/Customer/UserLoginCustomer';
import UserManagerDashboard from '../screens/Customer/admin/UserManagerDashboard';
import UserManagerUserDetailsPage from '../screens/Customer/admin/UserManagerUserDetailsPage';
import UserManagerEditUser from '../screens/Customer/admin/UserManagerEditUser';
import UserManagerAddUserManage from '../screens/Customer/admin/UserManagerAddUserManage';
import AdminNotificationDashboard from '../screens/Notification/admin/AdminNotificationDashboard';
import AdminNotificationForm from '../screens/Notification/admin/AdminNotificationForm';
import PaymentManagerPaymnetDash from '../screens/Payment/admin/PaymentManagementDashboard';
import PaymentManagerAddPayment from '../screens/Payment/admin/PaymentManagerAddPayment';
import PaymentManagerEditPayment from '../screens/Payment/admin/PaymentManagerEditPayment';
import AdminEditNotificationForm from '../screens/Notification/admin/AdminEditNotificationForm';
import CustomerAddReview from '../screens/Review/CustomerAddReview';
import ReviewAdminDashboard from '../screens/Review/admin/ReviewAdminDashboard';
import ReviewManagerEditReview from '../screens/Review/admin/ReviewManagerEditReview';
import VendorOrdersScreen from '../screens/Vendor/VendorOrdersScreen';
import VendorLoginScreen from '../screens/Vendor/VendorLoginScreen';
import VendorSignupScreen from '../screens/Vendor/VendorSignupScreen';
import VendorProfileScreen from '../screens/Vendor/VendorProfileScreen';
import CustomerHomeScreen from '../screens/Customer/CustomerHomeScreen';
import CustomerProfileScreen from '../screens/Customer/CustomerProfileScreen';
import { CartProvider } from '../context/CartContext';
import CustomerBrowseItems from '../screens/Customer/CustomerBrowseItems';
import CustomerSelectAStore from '../screens/Customer/CustomerSelectAStore';
import CustomerShoppingCart from '../screens/Customer/CustomerShoppingCart';
import CustomerProductDetails from '../screens/Customer/CustomerProductDetails';
import CustomerOrderReservationSum from '../screens/Customer/CustomerOrderReservationSum';
import Header from '../screens/Header';
import OrderHomeScreen from '../screens/Customer/admin/OrderHomeScreen';
import OrderDetailsScreen from '../screens/Customer/admin/OrderDetailsScreen';
import CreateOrderScreen from '../screens/Customer/admin/CreateOrderScreen';
import EditOrderScreen from '../screens/Customer/admin/EditOrderScreen';
import CustomerOrderConfirmation from '../screens/Customer/CustomerOrderConfirmation';
import ReportScreen from '../screens/Customer/admin/ReportScreen';
import Search from '../screens/Customer/Search';
import Notification from '../screens/Customer/Notification';
import Profile from '../screens/Customer/Profile';
import CustomerEditOrderScreen from '../screens/Customer/CustomerEditOrderScreen';
import CustomerCheckout from '../screens/Customer/CustomerCheckout';
import EditCustomerProfile from '../screens/Customer/EditCustomerProfile';
import AddDeliveryScreen from '../screens/Delivery/AddDeliveryScreen';
import DeliveryManagerDashboard from '../screens/Delivery/admin/DeliveryManagerDashboard';
import DeliveryManagerEditDelivery from '../screens/Delivery/admin/DeliveryManagerEditDelivery';
import CustomerCreditCardScreen from '../screens/Payment/CustomerCreditCardScreen';


// Define the Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the HomeStack
// Define the HomeStack
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectAStore"
        component={CustomerSelectAStore}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
      <Stack.Screen
        name="BrowseItems"
        component={CustomerBrowseItems}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={CustomerProductDetails}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
      <Stack.Screen
        name="Reservation"
        component={CustomerOrderReservationSum}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderSummary"
        component={CustomerOrderConfirmation}
      />
      <Stack.Screen
        name="OrderEdit"
        component={CustomerEditOrderScreen}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
      <Stack.Screen
        name="Checkout"
        component={CustomerCheckout}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
    </Stack.Navigator>
  );
}

// Define the Main Tab Navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Order') {
            iconName = 'cart-outline';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1f9a23',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      
    </Tab.Navigator>
  );
}


// Main App Navigator
const AppNavigator = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LaunchScreen">
          <Stack.Screen
            name="OnboardScreenVendor"
            component={OnboardScreenVendor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
        name="Order Summary"
        component={CustomerOrderConfirmation}
      />
      
      <Stack.Screen
        name="Generate Order"
        component={ReportScreen}
        options={{ header: () => <Header color="#ff0000" /> }}
      />
      <Stack.Screen
        name="Order Edit"
        component={EditOrderScreen}
        options={{ header: () => <Header color="#ff0000" /> }}
      />
      <Stack.Screen
        name="DeliveryManagerDashboard"
        component={DeliveryManagerDashboard}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="DeliveryManagerEditDelivery"
        component={DeliveryManagerEditDelivery}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddDeliveryScreen"
        component={AddDeliveryScreen}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="Order Create"
        component={CreateOrderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={CustomerCheckout}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
      <Stack.Screen
        name="Order edit"
        component={CustomerEditOrderScreen}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
          <Stack.Screen
        name="Reservation"
        component={CustomerOrderReservationSum}
        options={{ headerShown: false }}
      />
          <Stack.Screen
        name="Order"
        component={CustomerShoppingCart}
        options={{ header: () => <Header /> }}
      />
          <Stack.Screen
        name="ProductDetails"
        component={CustomerProductDetails}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
          <Stack.Screen
        name="SelectAStore"
        component={CustomerSelectAStore}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
      <Stack.Screen
        name="Select a Store"
        component={CustomerSelectAStore}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
      <Stack.Screen
        name="BrowseItems"
        component={CustomerBrowseItems}
        options={{ header: () => <Header color="#98fb98" /> }}
      />
      
          <Stack.Screen
            name="EditCustomerProfile"
            component={EditCustomerProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Order Details"
            component={OrderDetailsScreen}
            options={{ header: () => <Header color="#ff0000" /> }}
          />
          
          <Stack.Screen
            name="CustomerProfileScreen"
            component={CustomerProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomerHomeScreen"
            component={CustomerHomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorProfileScreen"
            component={VendorProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorLoginScreen"
            component={VendorLoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorSignupScreen"
            component={VendorSignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorOrdersScreen"
            component={VendorOrdersScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomerAddReview"
            component={CustomerAddReview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ReviewAdminDashboard"
            component={ReviewAdminDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ReviewManagerEditReview"
            component={ReviewManagerEditReview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminEditNotificationForm"
            component={AdminEditNotificationForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentManagerEditPayment"
            component={PaymentManagerEditPayment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentManagerAddPayment"
            component={PaymentManagerAddPayment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentManagerPaymnetDash"
            component={PaymentManagerPaymnetDash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminNotificationDashboard"
            component={AdminNotificationDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminNotificationForm"
            component={AdminNotificationForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserManagerAddUserManage"
            component={UserManagerAddUserManage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserManagerEditUser"
            component={UserManagerEditUser}
            options={{ headerShown: false }}
          />
          
          <Stack.Screen
            name="CustomerCreditCardScreen"
            component={CustomerCreditCardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserManagerDashboard"
            component={UserManagerDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserManagerUserDetailsPage"
            component={UserManagerUserDetailsPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorDashboard"
            component={VendorDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorProducts"
            component={VendorProducts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorAddProductsForms"
            component={VendorAddProductsForms}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProductsForm"
            component={EditProductsForms}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LaunchScreen"
            component={LaunchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingChoosingScreen"
            component={OnboardingChoosingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingScreen2"
            component={OnboardingScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingScreen3"
            component={OnboardingScreen3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorManagerAddVendorScreen"
            component={VendorManagerAddVendorScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminLoginForm"
            component={AdminLoginForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorManagerScreenVendor"
            component={VendorManagerScreenVendor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorDetailsPageVendorM"
            component={VendorDetailsPageVendorM}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorManagerEditVendor"
            component={VendorManagerEditVendor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserRegistrationCustomer"
            component={UserRegistrationCustomer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserLoginCustomer"
            component={UserLoginCustomer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderHomeScreen"
            component={OrderHomeScreen}
            options={{ header: () => <Header color="#ff0000" /> }}
          />
          

          {/* MainTab Screen */}
          <Stack.Screen
            name="MainTab"
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default AppNavigator;
