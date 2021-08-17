import React, { Component } from 'react'
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/core'

export class Chat extends Component {
    render() {
        return (
            <View>
                <View style={{ width: '100%', height: 60, backgroundColor: '#e0e0e0', paddingHorizontal: '4%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='left' size={22} />
                        <View style={{ width: 40, height: 40, backgroundColor: 'white', marginHorizontal: 10, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='user' size={18} />
                        </View>
                        <Text style={{ fontSize: 16 }}>NAMA USER</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='videocamera' size={18} />
                        </View>
                        <View style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='phone' size={18} />
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ height: 50, width: 70, backgroundColor: '#2277fe', marginTop: 3, marginLeft: '4%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white' }}>Hallo</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-end', }}>
                    <View style={{ height: 50, width: 70, backgroundColor: '#53d1b6', marginTop: 3, paddingRight: '4%', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: '4%' }}>
                        <Text style={{ color: 'white' }}>Hallo</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Chat
