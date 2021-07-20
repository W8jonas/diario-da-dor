import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../styles/colors';

// Modules

// Assets

// Functions

// Components

const totalDots = 8;

export function Progress({actualSelected = 3}) {

    return (
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{height: 10, width: 10, borderRadius: 10, backgroundColor: actualSelected === 1 ? colors.specificColors.beautifulColor : '#c4c4c4'}}/>
            <View style={{height: 10, width: 10, borderRadius: 10, backgroundColor: actualSelected === 2 ? colors.specificColors.beautifulColor : '#c4c4c4'}}/>
            <View style={{height: 10, width: 10, borderRadius: 10, backgroundColor: actualSelected === 3 ? colors.specificColors.beautifulColor : '#c4c4c4'}}/>
            <View style={{height: 10, width: 10, borderRadius: 10, backgroundColor: actualSelected === 4 ? colors.specificColors.beautifulColor : '#c4c4c4'}}/>
            <View style={{height: 10, width: 10, borderRadius: 10, backgroundColor: actualSelected === 5 ? colors.specificColors.beautifulColor : '#c4c4c4'}}/>
            <View style={{height: 10, width: 10, borderRadius: 10, backgroundColor: actualSelected === 6 ? colors.specificColors.beautifulColor : '#c4c4c4'}}/>
            <View style={{height: 10, width: 10, borderRadius: 10, backgroundColor: actualSelected === 7 ? colors.specificColors.beautifulColor : '#c4c4c4'}}/>
            <View style={{height: 10, width: 10, borderRadius: 10, backgroundColor: actualSelected === 8 ? colors.specificColors.beautifulColor : '#c4c4c4'}}/>
        </View>
    )
}

