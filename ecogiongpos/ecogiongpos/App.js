import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Articles from './component/Menu/Articles'
import ForgetPassword from './component/ForgetPassword';
import Login from './component/LoginForm'
import Splash from './component/SplashScreen';
const Stack = createStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Forget Password" component={ForgetPassword}/>
        <Stack.Screen name="Splash" component={Splash}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;
