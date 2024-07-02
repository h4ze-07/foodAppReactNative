import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchSvg from '../../assets/svg/SearchSvg'
import { categories, foods } from '../../constants'
import CategoriesItem from '../../components/CategoriesItem'
import FoodItem from '../../components/FoodItem'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeTab = () => {
  const [name, setName] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  async function getNameFormStorage() {
    const name = await AsyncStorage.getItem('UserName')
    if (name !== null) {
      setName(name)
    }
  }

  useEffect(() => {
    getNameFormStorage()
  }, [])

  const setCategory = (name: string) => {
    setActiveCategory(name)
  }

  return (
    <SafeAreaView className='flex-1 bg-mainWhite p-[20px]'>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* INTRO */}
        <View className='flex flex-row justify-between items-center mt-[30px]'>
          <View>
            <Text className='text-[30px] font-semibold text-mainDark'>Hello, {name}</Text>
            <Text className='text-[20px] mt-2 text-mainGrey'>What do you want today</Text>
          </View>
          <View className='w-[60] h-[60] rounded-full overflow-hidden'>
            <Image source={require('../../assets/person.png')} resizeMode='contain' className='w-full h-full' />
          </View>
        </View>

        {/* SEARCH */}
        <View>
          <View className='flex flex-row items-center border border-slate-200 bg-orange-50 px-3 mt-[60px] rounded-[15px]' style={{ gap: 20 }}>
            <SearchSvg width={30} height={30} />
            <TextInput
              placeholder='Search for food'
              className='text-mainDark text-[18px]'
            />
          </View>
        </View>

        {/* CATEGORIES */}
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoriesItem {...item} onClick={console.log} activeCategory={activeCategory} setCategory={setCategory} />}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={{ gap: 20 }}
          showsHorizontalScrollIndicator={false}
          className='mt-[30px] mb-[100px]'
        />

        {/* FOOD */}
        <View className='mx-auto'>
          <FlatList
            data={foods}
            renderItem={({ item }) => <FoodItem {...item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{ rowGap: 10 }}
            columnWrapperStyle={{ columnGap: 20 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeTab
