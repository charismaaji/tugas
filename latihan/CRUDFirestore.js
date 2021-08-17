import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Axios,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import {TextInput} from 'react-native-gesture-handler';

export class CRUDLatihan extends Component {
  constructor() {
    super();
    this.state = {
      inputNama: '',
      inputAlamat: '',
    };
  }

  submit = () => {
    firestore()
      .collection('Users')
      .add({
        name: 'Ada Lovelace',
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  // tambah = () => {
  //   const dataDiri = this.state.inputData;
  //   alert(`kamu menambah data ${dataDiri.name} kedalam table
  //   `);
  //   this.setState(prevState => ({
  //     data: [...prevState.data, dataDiri],
  //   }));
  //   this.setState({inputData: ''});
  // };

  // deleteData = id => {
  //   const filteredData = this.state.data.filter(value => {
  //     return value.id !== id;
  //   });
  //   this.setState({data: filteredData});

  //   tambah = () => {
  //     const tambahan = this.state.data;
  //     //   tambahan.push({id: 4,name:'Adi',address:'Cisauk'})
  //     //   this.setState({data: tambahan})

  //     this.setState(prevState => ({
  //       data: [...prevState.data, {id: 4, name: 'Adi', address: 'Cisauk'}],
  //     }));
  //   };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Name"
          // onChangeText={e => {
          //   this.setState(prevState => ({
          //     inputData: {...prevState.inputData, name: e},
          //   }));
          // }}
          // value={this.state.inputData.name}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Address"
          // onChangeText={e => {
          //   this.setState(prevState => ({
          //     inputData: {...prevState.inputData, address: e},
          //   }));
          // }}
          // value={this.state.inputData.address}
        />
        <TouchableOpacity
          style={{
            marginTop: 10,
            width: '80%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0077b6',
            borderRadius: 10,
          }}
          onPress={this.submit}>
          <Text style={{color: 'white'}}>Tambah</Text>
        </TouchableOpacity>
        {/* <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={styles.tabel}>
            <Text style={{color: 'white'}}>#</Text>
          </View>
          <View style={styles.tabel}>
            <Text style={{color: 'white'}}>Nama</Text>
          </View>
          <View style={styles.tabel}>
            <Text style={{color: 'white'}}>Lokasi</Text>
          </View>
          <View style={styles.tabel}>
            <Text style={{color: 'white'}}>Activity</Text>
          </View>
        </View>
        {this.state.data.map((value, index) => {
          return (
            <View style={{flexDirection: 'row'}} key={value.id}>
              <View style={styles.tabel}>
                <Text style={{color: 'white'}}>{index + 1}</Text>
              </View>
              <View style={styles.tabel}>
                <Text style={{color: 'white'}}>{value.name}</Text>
              </View>
              <View style={styles.tabel}>
                <Text style={{color: 'white'}}>{value.address}</Text>
              </View>
              <View style={styles.tabel}>
                <AntDesign
                  name="delete"
                  size={20}
                  style={{color: 'white'}}
                  onPress={() => {
                    this.deleteData(value.id);
                  }}
                />
              </View>
            </View>
          );
        })} */}
      </View>
    );
  }
}

export default CRUDLatihan;

const styles = StyleSheet.create({
  tabel: {
    width: 100,
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
  },
  textInputStyle: {
    width: '80%',
    height: 45,
    borderWidth: 0.5,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },
});
