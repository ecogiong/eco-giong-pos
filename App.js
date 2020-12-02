/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import LoginForm from './component/LoginForm'
import Articles from './component/Articles'
import PhoneNumberAndPassword from './component/PhoneNumberAndPassword';

const App = createStackNavigator({
  //Constant which holds all the screens like index of any book   
    "Login": { screen: LoginForm}, 
    //First entry by default be our first screen if we do not define initialRouteName
    "Articles": { screen: Articles }, 
    "PhoneNumberAndPassword": {screen:PhoneNumberAndPassword},
    
  },
  {
    initialRouteName: 'Login',
  }
);
export default createAppContainer(App);
