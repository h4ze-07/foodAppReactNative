import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import { foods } from '../../constants'
import CartItem from '../../components/CartItem'

const CartTab = () => {
  return (
    <SafeAreaView className='flex-1 bg-mainWhite p-[5px]'>
      {/* <ScrollView> */}
      <FlatList
        data={foods}
        renderItem={({ item }) => <CartItem {...item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ rowGap: 30 }}
        showsVerticalScrollIndicator={false}
      />
      {/* </ScrollView> */}
      <View className='pt-[40px] px-[5px]'>
        <View className='flex flex-row justify-between'>
          <Text className='text-mainDark font-bold text-[24px]'>Total price:</Text>
          <Text className='text-mainDark font-bold text-[24px]'>${50}</Text>
        </View>
        <CustomButton
          text='Checkout'
          textStyles='text-mainWhite font-bold text-center text-[20px]'
          containerStyles='bg-primary py-3 mt-[40px] mb-[50px] w-[70%] mx-auto rounded-[15px]'
          onClick={console.log}
        />
      </View>
    </SafeAreaView>
  )
}

export default CartTab

