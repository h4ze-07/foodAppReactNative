import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { onboarding } from '../constants'
import OnboardingItem from '../components/OnboardingItem'

// const navigate = useNavigation();

const OnboardingScreen = ({navigation}: any) => {
    const [currentScreen, setCurrentScreen] = useState(1);
    const { width } = Dimensions.get('window');
    const truncedWidth = Math.floor(width);
    const ref = useRef<FlatList>(null);

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
