import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../styles/colors'

// Modules

// Assets

// Functions

// Components

export function FooterButton({label, onPress}) {
    return (
        <TouchableOpacity 
            style={{backgroundColor: colors.colorsPrimaryTheme.primary, height: 45, width: '35%', alignItems: 'center', justifyContent: 'center'}}
            onPress={onPress}
            activeOpacity={0.7}
        >

            <Text style={{color: '#FFF', fontSize: 30, fontWeight: 'bold'}}>{label}</Text>
        </TouchableOpacity>
    )
}
