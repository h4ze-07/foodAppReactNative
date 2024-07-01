import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TStoreItem } from '../types'
import CustomButton from './CustomButton'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/StoreProvider'

const LikedListItem = ({ image, name, price, ingredients }: TStoreItem) => {

    const { store } = useStore();

    return (
        <View className='flex flex-row border items-center justify-between px-4 rounded-[20px] border-slate-200 overflow-hidden bg-mainWhite py-3'
        >
            <View>
                <Image source={image} className='w-[100] h-[100]' resizeMode='contain' />
            </View>
            <View className=''>
                <Text className='font-bold text-mainDark text-[16px]'>{name}</Text>
                <Text className='text-mainGrey text-[12px]'>{ingredients}</Text>
                <Text className='font-bold text-mainDark text-[18px]'>${price}</Text>
            </View>
            <View className=''>
                <CustomButton
                    text='Remove'
                    textStyles='font-bold text-mainWhite'
                    containerStyles='bg-red-500 rounded-[10px] px-[10] py-[5]'
                    onClick={() => store.removeFromLiked(name)}
                />
            </View>
        </View>
    )
}

export default observer(LikedListItem)
