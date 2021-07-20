import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import { styles } from './styles'
import { colors } from "../../styles/colors"
import { Progress } from './components/Progress'
import { FooterButton } from './components/FooterButton'
import { Screen1 } from './Screen1'
import { Screen2 } from './Screen2'

// Modules

// Assets

// Functions

// Components
const { width: screenWidth } = Dimensions.get('window')
const TOTAL_STEPS = 1

export function HowYou() {
	const scrollViewRef = useRef(null)

	const [step, setStep] = useState(0)

    function handleNextStep() {
		if (step >= TOTAL_STEPS) {
			return
		}
		setStep(step + 1)
	}

	function handlePrevStep() {
		if (step === 0) {
			return
		}
		setStep(step - 1)
	}

    useEffect(() => {
		const scrollToValueX = step * screenWidth
		scrollViewRef.current.scrollTo({ x: scrollToValueX, y: 0, animated: true })
	}, [step])

    return (
        <View style={{paddingTop: 24, paddingBottom: 10, flex: 1, justifyContent: 'space-between'}}>
            <View style={styles.container}>
                <Text style={{color: colors.supportColors.white1, fontSize: 20}}>
                    Cadastro
                </Text>
            </View>

            <View>
                <ScrollView
                    ref={scrollViewRef}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    decelerationRate={0}
                    snapToInterval={screenWidth}
                    snapToAlignment="center"
                >
                    <View style={{flex: 1, width: screenWidth}}>
                        <Screen1 />
                    </View>

                    <View style={{flex: 1, width: screenWidth}}>
                        <Screen2 />
                    </View>
                </ScrollView>
            </View>

            <View>
                <Progress />

                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10}}>
                    <FooterButton
                        label='<'
                        onPress={handlePrevStep}
                    />
                    <FooterButton
                        label='>'
                        onPress={handleNextStep}
                    />
                </View>
            </View>

        </View>
    )
}

