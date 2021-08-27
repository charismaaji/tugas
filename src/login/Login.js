import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      viewPassword: true,
      inputUsername: '',
      inputPassword: '',
    };
  }

  login = () => {
    const {inputUsername, inputPassword} = this.state;
    const {user, userLogin} = this.props;
    const getUser = user.filter(value => value.username === inputUsername);
    const users = getUser[0];

    if (users !== undefined) {
      if (users.password === inputPassword) {
        alert('Login Berhasil');
        userLogin(true);
      } else {
        alert('Login Gagal');
      }
    }
  };

  render() {
    const {inputUsername, inputPassword} = this.state;
    const {navigation, isLogin} = this.props;
    return (
      <ScrollView style={styles.page}>
        <Text>{JSON.stringify(isLogin)}</Text>
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
            <Text>Please login with a registerd account</Text>
          </View>
          <View
            style={[
              styles.button,
              {borderColor: '#ff477e', backgroundColor: 'white'},
            ]}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="user" size={18} style={{paddingHorizontal: '4%'}} />
            </View>
            <View style={styles.center}>
              <TextInput
                placeholder="Username"
                value={inputUsername}
                onChangeText={inputUsername => this.setState({inputUsername})}
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
                  value={inputPassword}
                  onChangeText={inputPassword => this.setState({inputPassword})}
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
            onPress={this.login}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
          <View style={{marginTop: 25, justifyContent: 'flex-start'}}>
            <Text style={{paddingBottom: 10}}>
              Forgot password?{' '}
              <Text style={{color: '#477eff'}}>Reset Password</Text>
            </Text>
            <Text>
              Don't have an account?
              <Text
                style={{color: '#477eff'}}
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                Sign Up
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
    isLogin: state.isLogin,
  };
};

const mapDispatchToProps = send => {
  return {
    getDataUsers: data =>
      send({
        type: 'USER-DATA',
        payload: data,
      }),
    userLogin: data =>
      send({
        type: 'USER-LOGIN',
        payload: data,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '7%',
    paddingTop: '10%',
  },
  button: {
    borderWidth: 2,
    width: '100%',
    height: 45,
    marginTop: 22,
    borderRadius: 15,
    flexDirection: 'row',
    elevation: 6,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
