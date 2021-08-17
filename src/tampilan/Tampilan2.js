import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Tampilan2 extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#477eff', paddingHorizontal: '2%', height: '100%' }}>
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Text style={{ color: 'white' }}>Parent Component</Text>
                </View>
                <View style={{ width: '100%', height: 150, backgroundColor: '#ff477e', padding: '3%', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ width: '25%', borderRadius: 100, backgroundColor: 'yellow', height: 100 }} />
                    <View style={{ flexDirection: 'column', paddingLeft: '3%' }}>
                        <View style={{ backgroundColor: '#aad576', width: '100%', height: 50, marginBottom: 20 }} />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ backgroundColor: 'red', width: '30%', height: 50 }} />
                            <View style={{ backgroundColor: 'yellow', width: '30%', height: 50 }} />
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ backgroundColor: '#aad576', marginTop: 20, width: '70%', height: 50 }} />
                    <View style={{ backgroundColor: '#aad576', marginTop: 20, width: '70%', height: 50 }} />
                    <View style={{ backgroundColor: '#aad576', marginTop: 20, width: '70%', height: 50 }} />
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <View style={{ backgroundColor: 'yellow', marginTop: 20, width: '70%', height: 50 }} />
                    <View style={{ backgroundColor: 'yellow', marginTop: 20, width: '70%', height: 50 }} />
                    <View style={{ backgroundColor: 'yellow', marginTop: 20, width: '70%', height: 50 }} />
                </View>
            </View>
        )
    }
}

export default Tampilan2
