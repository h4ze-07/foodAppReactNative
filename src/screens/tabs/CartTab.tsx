import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import { foods } from '../../constants'
import CartItem from '../../components/CartItem'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useStore } from '../../store/StoreProvider'
import { observer } from 'mobx-react-lite'

const CartTab = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { store } = useStore();

  function navigateHome() {
    navigation.push('Home')
  }

  function handleCheckoutClick() {
    store.clearCart();
  }

  return (
    <SafeAreaView className='flex-1 bg-mainWhite p-[5px]'>

      {
        store.cartLength === 0 ?
          <View>
            <Text className='text-[25px] text-center font-semibold my-[25px] text-mainDark'>Cart is empty</Text>
            <CustomButton
              text='Continue Purchase'
              onClick={navigateHome}
              textStyles='text-mainWhite font-bold text-center text-[20px]'
              containerStyles='bg-primary py-3 mb-[50px] w-[70%] mx-auto rounded-[15px]'
            />
          </View>
          :
          <>
            <FlatList
              data={store.cart}
              renderItem={({ item }) => <CartItem {...item} />}
              keyExtractor={item => item.id}
              contentContainerStyle={{ rowGap: 30 }}
              showsVerticalScrollIndicator={false}
            />

            <View className='pt-[40px] px-[5px]'>
              <View className='flex flex-row justify-between'>
                <Text className='text-mainDark font-bold text-[24px]'>Total price:</Text>
                <Text className='text-mainDark font-bold text-[24px]'>${store.totalCartAmount}</Text>
              </View>
              <CustomButton
                text='Checkout'
                textStyles='text-mainWhite font-bold text-center text-[20px]'
                containerStyles='bg-primary py-3 mt-[40px] mb-[50px] w-[70%] mx-auto rounded-[15px]'
                onClick={handleCheckoutClick}
              />
            </View>
          </>
      }
    </SafeAreaView>
  )
}

export default observer(CartTab)

