import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default class CRUDRedux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {id: 1, nama: 'Charis', alamat: 'BSD'},
        {id: 2, nama: 'Kurniawan', alamat: 'Serpong'},
        {id: 3, nama: 'Aji', alamat: 'Cisauk'},
      ],
      id: '',
      nama: '',
      alamat: '',
      onEdit: false,
      onSelect: false,
    };
  }

  // tambah = () => {
  //   const dataDiri = this.state.inputData;
  //   alert(`kamu menambah data ${dataDiri.name} kedalam table
  //   `);
  //   this.setState(prevState => ({
  //     data: [...prevState.data, dataDiri],
  //   }));
  //   this.setState({inputData: ''});
  // };

  submit = () => {
    const {data, id, nama, alamat} = this.state;
    const tampungan = data;
    tampungan.push({
      id: id,
      nama: nama,
      alamat: alamat,
    });
    this.setState({
      data: tampungan,
      id: '',
      nama: '',
      alamat: '',
    });
  };
  delete = id => {
    this.setState(prevState => ({
      data: prevState.data.filter(value => value.id != id),
    }));
  };

  edit = value => {
    this.setState({
      id: value.id,
      nama: value.nama,
      alamat: value.alamat,
      onEdit: true,
    });
  };

  update = () => {
    const {id, nama, alamat} = this.state;
    this.setState(prevState => ({
      data: prevState.data.map(value => {
        if (value.id == id) {
          (value.id = id), (value.nama = nama), (value.alamat = alamat);
          return value;
        } else {
          return value;
        }
      }),
      onEdit: false,
      id: '',
      nama: '',
      alamat: '',
    }));
  };

  select = () => {
    this.setState({onSelect: !this.state.onSelect});
  };

  checklist = id => {
    this.setState(prevState => ({
      data: prevState.data.map(value => {
        if (value.id == id) {
          value.checked = !value.checked;
          return value;
        } else {
          return value;
        }
      }),
    }));
  };

  deleteSelected = () => {
    this.setState(prevState => ({
      data: prevState.data.filter(value => !value.checked),
      onSelect: false,
    }));
  };

  render() {
    const {data, id, nama, alamat, onEdit, onSelect} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.contInput}>
          <TextInput
            placeholder="Id"
            value={id}
            onChangeText={typing => {
              this.setState({id: typing});
            }}
          />
          <TextInput
            placeholder="Nama"
            value={nama}
            onChangeText={typing => {
              this.setState({nama: typing});
            }}
          />
          <TextInput
            placeholder="Alamat"
            value={alamat}
            onChangeText={typing => {
              this.setState({alamat: typing});
            }}
          />
          {onEdit ? (
            <Button title="Update" onPress={this.update} />
          ) : (
            <Button title="Submit" onPress={this.submit} />
          )}
        </View>
        {data.map((value, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.tabel}>
                <Text>{value.id}</Text>
              </View>
              <View style={styles.tabel}>
                <Text>{value.nama}</Text>
              </View>
              <View style={styles.tabel}>
                <Text>{value.alamat}</Text>
              </View>
              {onSelect ? (
                <Entypo
                  name={value.checked ? 'circle-with-cross' : 'circle'}
                  onPress={() => this.checklist(value.id)}
                  size={20}
                />
              ) : (
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => this.delete(value.id)}
                    style={styles.tabel}>
                    <AntDesign name="delete" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.edit(value)}
                    style={styles.tabel}>
                    <AntDesign name="edit" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        })}
        {onSelect ? (
          <Button title="Hapus" onPress={this.deleteSelected} />
        ) : (
          <Button title="Hapus" onPress={this.select} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  contInput: {
    width: '100%',
    backgroundColor: 'white',
  },
  tabel: {
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
  },
});
