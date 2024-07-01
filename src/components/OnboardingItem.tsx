import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TOnboardingItemProps } from '../types'
import { SafeAreaView } from 'react-native-safe-area-context';
import TextLink from './TextLink';
import CustomButton from './CustomButton';

const paging = [1, 2, 3];

const OnboardingItem = ({ item, width, currentScreen, handleSkipClick, handleNextClick, handleStart }: TOnboardingItemProps) => {


    const { heading, description, image } = item;


    return (
        <SafeAreaView className='flex flex-col justify-between'>
            <View>
                <View className='h-[400]'>
                    <Image source={image} resizeMode='contain' style={{ width: width, top: -100 }} />
                </View>
                <Text className='font-bold text-center text-[35px] mt-[70px] text-mainDark'>{heading}</Text>
                <Text className='text-base text-center text-mainGrey max-w-[50%] mx-auto mt-[20px]'>{description}</Text>
                <View className='flex flex-row gap-3 justify-center items-center my-[30px]'>
                    {paging.map(item => (
                        <View key={item} className={`w-[20px] h-[20px] bg-mainGrey rounded-full ${currentScreen === item ? 'w-[50px] bg-primary' : null}`} />
                    ))}
                </View>
            </View>
            {currentScreen === 3
                ?
                <View className='mb-[30px]'>
                    <CustomButton
                        text='Get Started'
                        textStyles='font-bold text-mainWhite text-center text-[20px]'
                        containerStyles='py-4 bg-primary w-[70%] mx-auto rounded-[20px]'
                        onClick={handleStart}
                    />
                </View>
                :
                <View className='flex flex-row items-center justify-between px-5 mb-[30px]'>
                    <TextLink text='skip' textStyles='text-[20px] font-bold text-slate capitalize' containerStyles='py-3 px-5' onClick={handleSkipClick} />
                    <CustomButton text='next' containerStyles='bg-primary py-3 px-9 rounded-[10px]' textStyles='capitalize text-[20px] font-bold text-mainWhite' onClick={handleNextClick} />
                </View>
            }
        </SafeAreaView>
    )
}

export default OnboardingItem
