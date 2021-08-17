import React, { Component } from 'react'
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export class SignUpp extends Component {
    constructor() {
        super()
        this.state = {
            viewPassword: true,
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Image
                        source={require('../img/logo.png')}
                        style={{ height: 180, width: 150 }}
                    />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Salt Acadmy App</Text>
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text>Please register with valid data</Text>
                    </View>
                    <View style={[styles.button, { borderColor: '#ff477e', backgroundColor: 'white' }]}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='user' size={18} style={{ paddingHorizontal: '4%' }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput placeholder='Full Name' />
                        </View>
                    </View>
                    <View style={[styles.button, { borderColor: '#ff477e', backgroundColor: 'white' }]}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='mail' size={18} style={{ paddingHorizontal: '4%' }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput placeholder='Email' />
                        </View>
                    </View>
                    <View style={[styles.button, { justifyContent: 'space-between', paddingRight: '4%', borderColor: '#ff477e', backgroundColor: 'white' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.center}>
                                <Icon name='key' size={18} style={{ paddingHorizontal: '4%' }} />
                            </View>
                            <View style={styles.center}>
                                <TextInput placeholder='Password' secureTextEntry={this.state.viewPassword} />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.center}>
                            <Icon name={this.state.viewPassword ? 'eyeo' : 'eye'} size={19} onPress={() => {
                                this.setState({ viewPassword: !this.state.viewPassword })
                            }} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.button, { justifyContent: 'space-between', paddingRight: '4%', borderColor: '#ff477e', backgroundColor: 'white', marginBottom: 10 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.center}>
                                <Icon name='key' size={18} style={{ paddingHorizontal: '4%' }} />
                            </View>
                            <View style={styles.center}>
                                <TextInput placeholder='Confirm Password' secureTextEntry={this.state.viewPassword} />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.center}>
                            <Icon name={this.state.viewPassword ? 'eyeo' : 'eye'} size={19} onPress={() => {
                                this.setState({ viewPassword: !this.state.viewPassword })
                            }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.button, styles.center, { backgroundColor: '#1f3281', borderColor: '#1f3281' }]}>
                        <TouchableOpacity>
                            <Text style={{ color: 'white' }}>Register</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <View style={{ marginTop: 25, justifyContent: 'flex-start' }}>
                        <Text style={{ paddingBottom: 10 }}>Forgot password? <Text style={{ color: '#477eff' }} onPress={() => {
                            this.props.navigation.navigate('Reset Password')
                        }}>Reset Password</Text></Text>
                        <Text>Already have an account? <Text style={{ color: '#477eff' }} onPress={() => {
                            this.props.navigation.navigate('login')
                        }}>Sign in</Text></Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default SignUpp

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
        elevation: 6
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})