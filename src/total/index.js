import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Total extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Button
            title="Screen"
            onPress={() => this.props.navigation.navigate('Screen')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Input"
            onPress={() => this.props.navigation.navigate('ReduxInput')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    width: '50%',
    marginBottom: 20,
  },
});
