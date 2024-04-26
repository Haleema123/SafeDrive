import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from "./screens/Signup"
import DashboardScreen from './screens/Dashboard';
import HelpPageScreen from './screens/Help';
import ProfileScreen from './screens/Profile';
import MapScreen from './screens/Map';
import HospitalScreen from './screens/Hospital';
import AmbulanceScreen from './screens/Ambulance'
import DrowsyAlertScreen from './screens/DrowsyAlert';
import RequestScreen from './screens/Request';
import NotificationScreen from "./screens/Notification";
import MedicalInfoScreen from "./screens/Medicalinfo";
import Next from "./screens/Next";
import AccidentHistoryScreen from './screens/AccidentHistory';
import PersonalInfoScreen from './screens/PersonalInfo';
import LoginScreen from './screens/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#183E5A',},
        headerTintColor: 'white', 
        headerTitleStyle: {
        fontWeight: '600',
        fontSize:17 
      },}}>
        <Stack.Screen name="Sign up" component={SignupScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Help" component={HelpPageScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Hospital" component={HospitalScreen} />
        <Stack.Screen name="Ambulance" component={AmbulanceScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="About" component={DrowsyAlertScreen} />
        <Stack.Screen name="AmbulanceRequest" component={RequestScreen}/>
        <Stack.Screen name="Notification" component={NotificationScreen}/>
        <Stack.Screen name="MedicalInformation" component={MedicalInfoScreen}/>
        <Stack.Screen name="Next" component={Next}/>
        <Stack.Screen name="Accident History" component={AccidentHistoryScreen}/>
        <Stack.Screen name="Personal Information" component={PersonalInfoScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

