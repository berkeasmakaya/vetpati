import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';
import FirstPage from './pages/FirstPage';
import ClinicRegisterPage from "./pages/Auth/ClinicRegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import color from "./styles/color";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}}/>
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown:false}}/>
      <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}}/>
      <Stack.Screen name="ClinicRegisterPage" component={ClinicRegisterPage} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

const AppStack = () => {
  return(
    <Tab.Navigator 
      screenOptions={{
        headerShown:false, 
        tabBarShowLabel:false, 
        tabBarStyle: { backgroundColor: color.primary }
      }}
    >
      <Tab.Screen 
        name="MainPage" 
        component={MainPage}
        options={{
          tabBarIcon: () => (
            <MaterialDesignIcons name="home" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
        <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}}/>
        <Stack.Screen name="AppStack" component={AppStack} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
