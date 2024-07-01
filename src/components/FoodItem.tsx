import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { TFoodCardProps } from '../types'
import CustomButton from './CustomButton'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const FoodItem = ({ name, ingredients, image, price, id }: TFoodCardProps) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handleAddQuantity = () => {

    }


    const navigateToDetails = () => {
        navigation.navigate('Details', {
            name: name,
            image: image,
            id: id,
        })
    }

    return (
        <TouchableWithoutFeedback
            onPress={navigateToDetails}
        >
            <View className='w-[47%] border border-t-0 rounded-[15px] border-slate-100 px-[15px] mb-[40px] pb-[20px]'
                style={{
                    backgroundColor: '#FFF',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }}
            >
                <View className='w-full '>
                    <Image source={image} resizeMode='contain' className='w-full h-[200] -top-[50]' />
                </View>
                <Text className='font-bold text-[20px] text-mainDark'>{name}</Text>
                <Text className=' text-base text-mainGrey'>{ingredients}</Text>
                <View className='flex flex-row justify-between items-center'>
                    <Text className='font-bold text-base text-mainDark'>$ {price}</Text>
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
