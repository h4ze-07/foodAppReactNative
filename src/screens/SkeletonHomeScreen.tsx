import { FlatList, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { categories } from '../constants'


const SkeletonHomeScreen = () => {
    return (
        <SafeAreaView className='flex-1 bg-mainWhite p-[20px] overflow-hidden'>
            <View>

                {/* INTRO */}
                <View className='flex flex-row justify-between items-center mt-[30px]'>
                    <View>
                        <View className='w-[150] h-[30px] bg-skeleton rounded-[20px]' />
                        <View className='w-[250] h-[30px] bg-skeleton rounded-[20px] mt-2' />
                    </View>
                    <View className='w-[60] h-[60] rounded-full overflow-hidden bg-skeleton' />
                </View>

                {/* SEARCH */}
                <View className='mt-[60px] rounded-[15px] h-[50] bg-skeleton' />

                {/* CATEGORIES */}
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (<View className='rounded-[20px] w-[120] h-[40] bg-skeleton' />)}
                    keyExtractor={item => item.id}
                    horizontal
                    contentContainerStyle={{ gap: 20 }}
                    showsHorizontalScrollIndicator={false}
                    className='mt-[30px] mb-[50px]'
                />

                {/* FOOD */}
                <View className='mx-auto'>
                    <FlatList
                        data={[1, 2, 3, 4]}
                        renderItem={({ item }) => (<View className='bg-skeleton w-[48%] h-[200] rounded-[20px]' />)}
                        keyExtractor={item => item.toString()}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        contentContainerStyle={{ rowGap: 10 }}
                        columnWrapperStyle={{ columnGap: 10 }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SkeletonHomeScreen
