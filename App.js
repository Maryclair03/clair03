import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen'; 
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name= "Login" component={LoginScreen} />
        <Stack.Screen name= "Register" component={RegistrationScreen} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
