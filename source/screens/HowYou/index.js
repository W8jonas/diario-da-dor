import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles'
import { colors } from "../../styles/colors"

// Modules

// Assets

// Functions

// Components

export function HowYou() {
    return (
        <View style={{paddingVertical: 24, flex: 1, justifyContent: 'space-between'}}>
            <View style={styles.container}>
                <Text style={{color: colors.supportColors.white1, fontSize: 20}}>
                    Cadastro
                </Text>
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

