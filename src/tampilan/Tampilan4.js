import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Tampilan4 extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0096c7', height: '100%', paddingHorizontal: '5%' }}>
                <View style={{ flex: .1, alignItems: 'center', paddingTop: 10 }}>
                    <Text style={{ flex: 1, color: 'white' }}>Parent Component</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'yellow', width: '70%', height: 150 }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'green', width: '100%', height: 40, marginTop: 30 }} />
                    <View style={{ backgroundColor: 'green', width: '100%', height: 40, marginTop: 10 }} />
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <View style={{ backgroundColor: 'red', width: '40%', height: 40, marginTop: 10 }} />
                </View>
            </View>
        )
    }
}

export default Tampilan4
