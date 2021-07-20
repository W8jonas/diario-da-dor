import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles'
import { colors } from "../../styles/colors"
import { Progress } from './components/Progress'
import { FooterButton } from './components/FooterButton'

// Modules

// Assets

// Functions

// Components

export function HowYou() {
    return (
        <View style={{paddingTop: 24, paddingBottom: 10, flex: 1, justifyContent: 'space-between'}}>
            <View style={styles.container}>
                <Text style={{color: colors.supportColors.white1, fontSize: 20}}>
                    Cadastro
                </Text>
            </View>

            <View>
                <Text>Container principal</Text>
            </View>

            <View>
                <Progress />

                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10}}>
                    <FooterButton
                        label='<'
                        onPress={() => {}}
                    />
                    <FooterButton
                        label='>'
                        onPress={() => {}}
                    />
                </View>
            </View>

        </View>
    )
}

