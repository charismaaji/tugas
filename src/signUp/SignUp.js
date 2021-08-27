import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      viewPassword: true,
      username: '',
      password: '',
    };
  }

  submit = () => {
    const {username, password} = this.state;
    const {addDataUser} = this.props;
    addDataUser({username: username, password: password});
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    const {navigation, user} = this.props;
    const {data, username, password} = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>{JSON.stringify(user)}</Text>
        <View style={styles.container}>
          <Image
            source={require('../img/logo.png')}
            style={{height: 180, width: 150}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Salt Acadmy App
            </Text>
          </View>
          <View style={{paddingVertical: 5}}>
            <Text>Please register with valid data</Text>
          </View>
          <View
            style={[
              styles.button,
              {borderColor: '#ff477e', backgroundColor: 'white'},
            ]}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="user" size={18} style={{paddingHorizontal: '4%'}} />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TextInput placeholder="Full Name" />
            </View>
          </View>
          <View
            style={[
              styles.button,
              {borderColor: '#ff477e', backgroundColor: 'white'},
            ]}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="mail" size={18} style={{paddingHorizontal: '4%'}} />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={typing => {
                  this.setState({username: typing});
                }}
              />
            </View>
          </View>
          <View
            style={[
              styles.button,
              {
                justifyContent: 'space-between',
                paddingRight: '4%',
                borderColor: '#ff477e',
                backgroundColor: 'white',
              },
            ]}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.center}>
                <Icon name="key" size={18} style={{paddingHorizontal: '4%'}} />
              </View>
              <View style={styles.center}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={this.state.viewPassword}
                  value={password}
                  onChangeText={typing => {
                    this.setState({password: typing});
                  }}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.center}>
              <Icon
                name={this.state.viewPassword ? 'eyeo' : 'eye'}
                size={19}
                onPress={() => {
                  this.setState({viewPassword: !this.state.viewPassword});
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              styles.center,
              {backgroundColor: '#1f3281', borderColor: '#1f3281'},
            ]}
            onPress={this.submit}>
            <Text style={{color: 'white'}}>Register</Text>
          </TouchableOpacity>
          <View style={{marginTop: 25, justifyContent: 'flex-start'}}>
            <Text style={{paddingBottom: 10}}>
              Forgot password?{' '}
              <Text style={{color: '#477eff'}}>Reset Password</Text>
            </Text>
            <Text>
              Already have an account?{' '}
              <Text
                style={{color: '#477eff'}}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                Sign in
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userData,
  };
};

const mapDispatchToProps = send => {
  return {
    addDataUser: data =>
      send({
        type: 'ADD-DATA',
        payload: data,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '7%',
  },
  button: {
    borderWidth: 2,
    width: '100%',
    height: 45,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'row',
    elevation: 6,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
