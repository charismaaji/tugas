import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

class ReduxBasicInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeTitle: '',
    };
  }

  componentDidMount() {
    firestore()
      .collection('user')
      .onSnapshot(value => {
        let tampungan = [];
        value.docs.forEach(result => {
          tampungan.push(result.data());
        });
        this.props.dataUser(tampungan);
      });
  }

  changeText = () => {
    this.props.change(this.state.changeTitle);
    this.setState({
      changeTitle: '',
    });
  };

  render() {
    const {user} = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Text>{this.props.title}</Text>
          {/* <Text>{JSON.stringify(changeTitle)}</Text> */}
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({changeTitle: text})}
          />
          <Button title="Edit Title" onPress={this.changeText} />
        </View>
        {user.map((value, index) => (
          <View key={index} style={styles.mapping}>
            <Text>{value.nama}</Text>
            <Text>{value.alamat}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    user: state.dataUsers,
  };
};

const mapDispatchToProps = send => {
  return {
    change: data =>
      send({
        type: 'CHANGE-TITLE',
        payload: data,
      }),
    dataUser: data =>
      send({
        type: 'FIREBASE',
        payload: data,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxBasicInput);

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  textInput: {
    width: '80%',
    height: 40,
    borderWidth: 0.5,
    marginVertical: 20,
  },
  mapping: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginBottom: 10,
  },
});
