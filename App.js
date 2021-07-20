import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './source/routes';
import { colors } from './source/styles/colors';

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor={colors.colorsPrimaryTheme.primary} />
      <Routes />
    </>
  )
}

