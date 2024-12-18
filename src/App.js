import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';
import FirstPage from './pages/FirstPage';
import ClinicRegisterPage from "./pages/Auth/ClinicRegisterPage/";


const Stack = createNativeStackNavigator();

function App(){
  
  const AuthStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}}/>
        <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown:false}}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}}/>
        <Stack.Screen name="ClinicRegisterPage" component={ClinicRegisterPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    )
  }



  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;