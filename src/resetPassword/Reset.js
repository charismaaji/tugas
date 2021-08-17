import React, { Component } from 'react'
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/core'

export class Reset extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                {/* <View style={{ height: 55, width: '100%', backgroundColor: '#ff477e', alignItems: 'center', flexDirection: 'row' }}>
                    <Icon name='arrowleft' size={25} style={{ marginLeft: '4%', color: 'white' }} onPress={() => {
                        this.props.navigation.goBack()
                    }} />
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 20 }}>Forgot Password</Text>
                </View> */}
                <Text style={{ marginVertical: 20, marginLeft: '4%' }}>
                    Enter your email or mobile number below
                </Text>
                <View style={styles.textInput}>
                    <TextInput placeholder='Email or mobile number' style={{ marginLeft: 10 }} />
                </View>
                <TouchableOpacity style={[styles.button, styles.center, { backgroundColor: '#1f3281', borderColor: '#1f3281' }]}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white' }}>Continue</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Reset

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '7%'
    },
    button: {
        borderWidth: 2,
        height: 45,
        marginTop: 22,
        marginHorizontal: '4%',
        borderRadius: 15,
        flexDirection: 'row',
        elevation: 6
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        marginHorizontal: '4%',
        height: 55,
        borderWidth: 2,
        borderColor: '#ff477e',
        borderRadius: 15,
        elevation: 5,
        backgroundColor: 'white'
    }
})
