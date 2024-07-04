import { Image, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { TStoreItem } from '../types'

const CartItem = ({ image, name, price, ingredients }: TStoreItem) => {
    return (
        <View className='mx-auto w-[95%] py-[10px] border border-slate-200 rounded-[20px] bg-mainWhite flex flex-row justify-between items-center px-[5px]'>
            <View>
                <Image source={image} className='w-[100] h-[100]' resizeMode='contain' />
            </View>
            <View className=''>
                <Text className='font-bold text-mainDark text-[16px]'>{name}</Text>
                <Text className='text-mainGrey text-[12px]'>{ingredients}</Text>
                <Text className='font-bold text-mainDark text-[18px]'>${price}</Text>
            </View>
            <View className='items-center'>
                <Text className='text-mainDark font-semibold text-[20px] mb-[10px]'>{3}</Text>
                <View className='flex flex-row border border-primary rounded-[15px] overflow-hidden'>
                    <CustomButton
                        text='-'
                        textStyles='font-bold text-mainWhite'
                        containerStyles='bg-red-500 px-[20] py-[4]'
                        onClick={console.log}
                    />
                    <CustomButton
                        text='+'
                        textStyles='font-bold text-mainWhite'
                        containerStyles='bg-red-500 px-[20] py-[4]'
                        onClick={console.log}
                    />
                </View>
            </View>
        </View>
    )
}

export default CartItem
