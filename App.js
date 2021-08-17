import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Login from './src/login/Login';
import SignUp from './src/signUp/SignUp';
import Reset from './src/resetPassword/Reset';
import Tampilan1 from './src/tampilan/Tampilan1';
import Tampilan2 from './src/tampilan/Tampilan2';
import Tampilan3 from './src/tampilan/Tampilan3';
import Tampilan4 from './src/tampilan/Tampilan4';
import Tampilan5 from './src/tampilan/Tampilan5';
import Icon from 'react-native-vector-icons/AntDesign';
import Chat from './src/tampilan/Chat';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Fetch from './src/Fetch';
import Movie from './movie/Movie';
import Card from './movie/Card';
import CRUDLatihan from './latihan/CRUDLatihan';
import CRUDRedux from './latihan/CRUDRedux';
// import Latihan2 from './latihan/CRUDFirestore';
const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen
      //       name="login"
      //       component={Login}
      //       options={{headerShown: false}}
      //     />
      //     <Stack.Screen
      //       name="Sign Up"
      //       component={SignUp}
      //       options={{headerShown: true}}
      //     />
      //     <Stack.Screen
      //       name="Reset Password"
      //       component={Reset}
      //       options={{headerShown: true}}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <CRUDRedux />
    );
  }
}

export default App;
