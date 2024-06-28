import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { TCategoriesProps } from '../types'

const CategoriesItem = ({ name, image, activeCategory, setCategory }: TCategoriesProps) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => setCategory(name)}
        >
            <View className={`flex flex-row items-center py-1 pl-1 pr-[30px] rounded-[20px] ${activeCategory === name ? 'bg-primary' : 'bg-orange-100'}`}
            >
                <View className='flex flex-row justify-center items-center w-[40px] h-[40px] rounded-full bg-white'>
                    <Image source={image} resizeMode='contain' className='max-w-[30px] max-h-[30px]' />
                </View>
                <Text className={`font-semibold text-[16px] ml-3 ${activeCategory === name ? 'text-mainWhite' : 'text-primary'}`}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesItem
