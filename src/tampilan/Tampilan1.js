import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Tampilan1 extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#477eff', paddingHorizontal: '2%', height: '100%' }}>
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Text style={{ color: 'white' }}>Parent Component</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <View style={{ backgroundColor: '#ff477e', width: '40%', height: 50 }} />
                    <View style={{ backgroundColor: '#aad576', width: '40%', height: 50 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                    <View style={{ backgroundColor: '#ff477e', width: '40%', height: 50 }} />
                    <View style={{ backgroundColor: '#aad576', width: '40%', height: 50 }} />
                </View>
                <View style={{ backgroundColor: '#ff477e', width: '100%', height: 250, paddingHorizontal: '2%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                        <View style={{ backgroundColor: '#aad576', width: '40%', height: 50 }} />
                        <View style={{ backgroundColor: '#aad576', width: '40%', height: 50 }} />
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                            <View style={{ backgroundColor: '#aad576', width: '40%', height: 50 }} />
                            <View style={{ backgroundColor: 'yellow', width: '40%', height: 50 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 15, justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'yellow', width: '25%', height: 50 }} />
                        <View style={{ backgroundColor: '#aad576', width: '25%', height: 50 }} />
                        <View style={{ backgroundColor: 'red', width: '25%', height: 50 }} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Tampilan1