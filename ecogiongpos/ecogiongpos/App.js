import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Articles from './component/Menu/Articles'
import ForgetPassword from './component/ForgetPassword';
import Login from './component/LoginForm'
import Splash from './component/SplashScreen';

// const bottomtab = createMaterialBottomTabNavigator(
//   {
//   //   Articles:{
//   //     screen: Articles,
//   //     navigationOptions:{
//   //       tabBarIcon: ({tintColor}) => (
//   //         <View>
//   //             <Icon style= {[{color: tintColor}]} size= {25} name={'ios-home'}/>
//   //         </View>
//   //       ),
//   //     }
//   //   }, 
    
//   // },
//   {
//     activeColor: 'black',
//     inactiveColor: '#fff',
//     barStyle: { backgroundColor: 'rgba(224, 175, 81, 0.94)' },
//   }
// )


const App = createStackNavigator(
  
  {
    'Splash':{screen: Splash, navigationOptions:{headerShown: false}},
    "Login": {screen:Login, navigationOptions:{headerShown: false} }, 
    "Articles": {screen: Articles, navigationOptions:{headerShown: false}},
    "Forget Password":{ screen: ForgetPassword}
  },
  {
        initialRouteName:'Splash',
  }
);
 
export default createAppContainer(App);
