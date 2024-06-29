import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamList } from '../types';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome'

const DetailsScreen = () => {

  const route = useRoute<RouteProp<ParamList, 'Details'>>();

  const { image, name } = route.params;


  return (
    <SafeAreaView className='flex-1 bg-mainWhite'>
      <View>
        <Image
          source={image}
          resizeMode='contain'
          className='w-[60%] h-[300] mx-auto mt-[40px]'

        />
      </View>
      <View className='bg-primary flex-1 mt-[30px] rounded-tl-[30px] rounded-tr-[30px] pt-[30px] px-[20px]'>
        <View className='justify-between flex flex-row items-center'>
          <Text className='text-mainWhite font-bold text-[25px]'>{name}</Text>
          <Pressable className='w-[40] h-[40] rounded-full bg-mainWhite flex flex-row justify-center items-center'>
            <Icon name='heart-o' size={20} color={"#F9813A"}  />
          </Pressable>
        </View>
        <Text className='text-mainWhite text-base mt-[20]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga similique nihil ratione natus sint praesentium itaque sequi! Nulla fugit eaque nobis molestiae enim dignissimos id, magnam quos nihil saepe cum inventore at, laborum atque accusantium ratione ducimus ullam, neque dolore?</Text>
        <CustomButton
          text='Add To Cart'
          containerStyles='bg-mainWhite py-[15px] mt-[40px] rounded-[40px]'
          textStyles='text-primary font-bold text-[20px] text-center'
          onClick={console.log}
        />
      </View>
    </SafeAreaView>
  )
}

export default DetailsScreen
