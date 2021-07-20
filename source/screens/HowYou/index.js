import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

// Modules

// Assets

// Functions

// Components

export function HowYou() {
    return (
        <View style={{paddingHorizontal: 20, paddingVertical: 30, flex: 1, justifyContent: 'space-between'}}>
            <View>
                <Text>Cadastro</Text>
            </View>

            <View>
                <Text>Container principal</Text>
            </View>

            <View>
                <View>
                    <Text>progress</Text>
                </View>

                <View>
                    <Text> {'<'} </Text>
                    <Text> {'>'} </Text>
                </View>
            </View>

        </View>
    )
}

