import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { TFoodCardProps } from '../types'
import CustomButton from './CustomButton'

const FoodItem = ({ name, ingredients, image, price }: TFoodCardProps) => {
    return (
        <TouchableWithoutFeedback

        >
            <View className='w-[48.5%] border border-t-0 rounded-[15px] border-slate-100 px-[15px] mb-[40px] pb-[20px]'>
                <View className='w-full '>
                    <Image source={image} resizeMode='contain' className='w-full h-[200] -top-[50]' />
                </View>
                <Text>{name}</Text>
                <Text>{ingredients}</Text>
                <View className='flex flex-row justify-between items-center'>
                    <Text>{price}</Text>
                    <CustomButton
                        text='+'
                        textStyles='color-mainWhite text-[30px]'
                        containerStyles='bg-primary flex flex-row items-center justify-center rounded-full w-[40px] h-[40px]'
                        onClick={console.log}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FoodItem
