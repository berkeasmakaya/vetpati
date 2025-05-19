import '../gesture-handler.native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterPage from './pages/Auth/RegisterPage/RegisterPage';
import LoginPage from './pages/Auth/LoginPage/LoginPage';
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ClinicRegisterPage from "./pages/Auth/ClinicRegisterPage/ClinicRegisterPage";
import UserMainPage from "./pages/UserMainPage/UserMainPage";
import UserClinicDetailPage from "./pages/UserClinicDetailPage/UserClinicDetailPage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ClinicMainPage from "./pages/ClinicMainPage/ClinicMainPage";
import { View } from "react-native";
import color from "./styles/color";
import ClinicApptPage from "./pages/ClinicApptPage/ClinicApptPage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UserApptPage from "./pages/UserApptPage/UserApptPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import UserHistoryApptPage from "./pages/UserHistoryApptPage/UserHistoryApptPage"
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
import ClinicEditPage from './pages/ClinicEditPage/ClinicEditPage';
import CustomDrawerContent from './components/CustomDrawerContent/CustomDrawerContent';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserFavoriteClinic from './pages/UserFavoriteClinicPage/UserFavoriteClinicPage';
import UserGetApptPage from './pages/UserGetApptPage/UserGetApptPage';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
      <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="ClinicRegisterPage" component={ClinicRegisterPage} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

const UserProfileDrawer = () => {
  return(
    <Drawer.Navigator 
      drawerContent={(props)=><CustomDrawerContent {...props} drawerType="UserProfile"/>}
      screenOptions={{
        drawerPosition:"right",
        headerShown:false
      }}
    >
      <Drawer.Screen name='UserProfilePage' component={UserProfilePage} options={{
        drawerLabel:"Ana Sayfa",
        drawerIcon:()=>(<Icon name='home' size={40} color={color.green}/>),
        drawerLabelStyle:{fontSize:20, color:color.green}
      }}/>
      <Drawer.Screen name='UserFavoriteClinic' component={UserFavoriteClinic} options={{
        drawerLabel:"Favori Klinikler",
        drawerIcon:()=>(<Icon name='star' size={40} color={color.green}/>),
        drawerLabelStyle:{fontSize:20, color:color.green}
      }}/>
    </Drawer.Navigator>
  )
}

const UserMainPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserMainPage" component={UserMainPage} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  )
}

const UserApptPagesStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="UserApptPage" component={UserApptPage} options={{headerShown:false}}/>
      <Stack.Screen name="UserHistoryApptPage" component={UserHistoryApptPage} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const UserAppStack = () => {
  return(
    <Tab.Navigator screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarStyle:{height:75}}}>
      <Tab.Screen name="UserMainPageStack" component={UserMainPageStack} options={{
        tabBarIcon:({focused})=>(
          <View style={{ position: "absolute", top: -10, width: 70, height: 70, justifyContent: "center", alignItems: "center", }}>
            <Icon name="home" size={50} color={focused ? color.blue : "#000000"} />
          </View>
        )
      }} />
      <Tab.Screen name="UserApptPagesStack" component={UserApptPagesStack} options={{
        tabBarIcon:({focused})=>(
          <View style={{ position: "absolute", top: -10, width: 70, height: 70, justifyContent: "center", alignItems: "center", }}>
            <Icon name="calendar-month" size={50} color={focused ? color.blue : "#000000"} />
          </View>
        )
      }} />
      <Tab.Screen name="UserProfileDrawer" component={UserProfileDrawer} options={{
        tabBarIcon:({focused}) =>(
          <View style={{ position: "absolute", top: -10, width: 70, height: 70, justifyContent: "center", alignItems: "center", }}>
            <Icon name="account" size={50} color={focused ? color.blue : "#000000"} />
          </View>
        )
      }}/>
    </Tab.Navigator>
  )
}

const ClinicDrawer = () => {
  return(
    <Drawer.Navigator 
      drawerContent={(props)=><CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition:"right",
        headerShown:false
      }}
    >
      <Drawer.Screen name='ClinicMainPage' component={ClinicMainPage} options={{
        drawerLabel:"Ana Sayfa",
        drawerIcon:()=>(<Icon name='home' size={40} color={color.green}/>),
        drawerLabelStyle:{fontSize:20, color:color.green}
      }}/>
      <Drawer.Screen name='ClinicEditPage' component={ClinicEditPage} options={{ 
        drawerLabel:"Profili Düzenle",
        drawerIcon:()=>(<Icon name='account-edit' size={40} color={color.green}/>),
        drawerLabelStyle:{fontSize:20, color:color.green}
      }}/>
    </Drawer.Navigator>
  )
}

const ClinicMainPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClinicDrawer" component={ClinicDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  )

}

const ClinicAppStack = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 75,
      }
    }}>
      <Tab.Screen name="ClinicMainPageStack" component={ClinicMainPageStack} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ position: "absolute", top: -10, width: 70, height: 70, justifyContent: "center", alignItems: "center", }}>
            <Icon name="home" size={50} color={focused ? color.brown : "#000000"} />
          </View>
        )
      }} />
      <Tab.Screen name="ClinicApptPage" component={ClinicApptPage} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ position: "absolute", top: -10, width: 70, height: 70, justifyContent: "center", alignItems: "center", }}>
            <Icon name="calendar-month" size={50} color={focused ? color.brown : "#000000"} />
          </View>
        )
      }}
      />
    </Tab.Navigator>
  )
}

function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="UserAppStack" component={UserAppStack} options={{ headerShown: false }} />
        <Stack.Screen name="ClinicAppStack" component={ClinicAppStack} options={{ headerShown: false }} />
        <Stack.Screen name="UserClinicDetailPage" component={UserClinicDetailPage} options={{ headerShown: false, }} />
        <Stack.Screen name='UserGetApptPage' component={UserGetApptPage} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App;