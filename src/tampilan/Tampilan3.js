import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Tampilan3 extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0096c7', height: '100%', paddingHorizontal: '5%' }}>
                <View style={{ flex: .1, alignItems: 'center', paddingTop: 10 }}>
                    <Text style={{ flex: 1, color: 'white' }}>Parent Component</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                        <View style={{ width: '40%', height: 100, backgroundColor: 'yellow' }} />
                        <View style={{ width: '40%', height: 100, backgroundColor: 'yellow' }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                        <View style={{ width: '40%', height: 100, backgroundColor: 'yellow' }} />
                        <View style={{ width: '40%', height: 100, backgroundColor: 'yellow' }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                        <View style={{ width: '40%', height: 100, backgroundColor: 'yellow' }} />
                        <View style={{ width: '40%', height: 100, backgroundColor: 'yellow' }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                        <View style={{ width: '40%', height: 100, backgroundColor: 'yellow' }} />
                        <View style={{ width: '40%', height: 100, backgroundColor: 'yellow' }} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Tampilan3
