import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Tampilan5 extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0096c7', height: '100%', paddingHorizontal: '5%' }}>
                <View style={{ flex: .1, alignItems: 'center', paddingTop: 10 }}>
                    <Text style={{ flex: 1, color: 'white' }}>Parent Component</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#72efdd', width: '90%', height: 150 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Child Component</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', margin: 10, }}>
                            <View style={{ backgroundColor: 'red', width: '30%', height: 100, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>Child</Text>
                            </View>
                            <View style={{ backgroundColor: '#aad576', width: '60%', height: 60, alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                                <Text style={{ color: 'white' }}>Child</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#72efdd', width: '90%', height: 150, marginTop: 20, justifyContent: 'space-evenly' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Child Component</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View style={{ backgroundColor: 'yellow', width: '25%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text>Child</Text>
                            </View>
                            <View style={{ backgroundColor: 'yellow', width: '25%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text>Child</Text>
                            </View>
                            <View style={{ backgroundColor: 'yellow', width: '25%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text>Child</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '75%', height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text>Child Component</Text>
                    </View>
                    <View style={{ width: '75%', height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text>Child Component</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Tampilan5
