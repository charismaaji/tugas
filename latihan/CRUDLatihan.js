import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-gesture-handler';

export class CRUDLatihan extends Component {
  constructor() {
    super();
    this.state = {
      // data: [
      //   {id: 1, name: 'Charisma', address: 'BSD'},
      //   {id: 2, name: 'Kurniawan', address: 'Depok'},
      //   {id: 3, name: 'Aji', address: 'Serpong'},
      // ],
      // inputData: {
      //   nama: '',
      //   alamat: '',
      // },
      nama: '',
      alamat: '',
      maindata: [],
    };
  }

  async componentDidMount() {
    await this.getData();
    // console.log('ini dari asyncstorage' ,data)

    // console.log('ini dari main data', this.state.maindata)
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('data');

      this.setState({
        maindata: jsonValue != null ? JSON.parse(jsonValue) : null,
      });
    } catch (e) {
      // error reading value
    }
  };

  storeData = async () => {
    const {nama, alamat} = this.state;
    const json = [...this.state.maindata, {nama, alamat}];
    console.log(json);
    try {
      const jsonValue = JSON.stringify(json);
      await AsyncStorage.setItem('data', jsonValue);
      await this.getData();
      // this.setState({
      //     maindata:json
      // })
    } catch (e) {
      // saving error
    }
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
  // };
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
          onChangeText={text => this.setState({nama: text})}
          // onChangeText={e => {
          //   this.setState(prevState => ({
          //     inputData: {...prevState.inputData, name: e},
          //   }));
          // }}
          // value={this.state.inputData.name}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="alamat"
          onChangeText={text => this.setState({alamat: text})}
          // onChangeText={e => {
          //   this.setState(prevState => ({
          //     inputData: {...prevState.inputData, address: e},
          //   }));
          // }}
          // value={this.state.inputData.address}
        />
        <Button
          title="Tambah"
          onPress={this.storeData}
          style={{
            marginTop: 10,
          }}
        />
        <View style={{flexDirection: 'row', marginTop: 10}}>
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
        {this.state.maindata.map((value, index) => {
          return (
            <View style={{flexDirection: 'row'}} key={index}>
              {/* <View style={styles.tabel}>
          <Text style={{color: 'white'}}>{index + 1}</Text>
        </View> */}
              <View style={styles.tabel}>
                <Text style={{color: 'white'}}>{value.nama}</Text>
              </View>
              <View style={styles.tabel}>
                <Text style={{color: 'white'}}>{value.alamat}</Text>
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
        })}
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
