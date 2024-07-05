import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { onboarding } from '../constants'
import OnboardingItem from '../components/OnboardingItem'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


const OnboardingScreen = () => {
    const [currentScreen, setCurrentScreen] = useState(1);
    const { width } = Dimensions.get('window');
    const truncedWidth = Math.floor(width);
    const ref = useRef<FlatList>(null);

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handlScrollList = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const screen = Math.floor(e.nativeEvent.contentOffset.x / truncedWidth) + 1;
        setCurrentScreen(screen)
    }

    const handleSkipClick = () => {
        const offset = 3 * truncedWidth;
        ref?.current?.scrollToOffset({ offset: offset });
        setCurrentScreen(3);
    }

    const handleNextClick = () => {
        const offset = currentScreen * truncedWidth;
        ref?.current?.scrollToOffset({ offset: offset });
        setCurrentScreen(currentScreen + 1);
    }

    const handleStart = () => {
        navigation.navigate('Login')
    }

    return (
        <View className='flex-1 bg-mainWhite'>
            <FlatList
                onMomentumScrollEnd={(e) => handlScrollList(e)}
                data={onboarding}
                renderItem={({ item }) => <OnboardingItem
                    item={item}
                    width={width}
                    currentScreen={currentScreen}
                    handleSkipClick={handleSkipClick}
                    handleNextClick={handleNextClick}
                    handleStart={handleStart}
                />}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={ref}
            />
        </View>
    )
}

export default OnboardingScreen
