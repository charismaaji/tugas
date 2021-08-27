import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen from '../screen';
import Total from '../total';
import ReduxBasicInput from '../reduxBasic/ReduxBasicInput';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';

const Stack = createStackNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Total"
            component={Total}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Screen" component={Screen} />
          <Stack.Screen name="ReduxInput" component={ReduxBasicInput} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
