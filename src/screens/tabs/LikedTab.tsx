import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LikedListItem from '../../components/LikedListItem';
import { observer } from 'mobx-react-lite';
import { storeContext, useStore } from '../../store/StoreProvider';


const LikedTab = observer(() => {

  const { store } = useStore();



  return (
    <SafeAreaView className='flex-1 bg-mainWhite p-[10]'>
      {
        store.likedFoodLength === 0
          ?
          <View className='mt-[10px]'>
            <Text className='text-[20px] text-mainDark text-center font-semibold'>Curently no liked food...</Text>
          </View>
          :
          <FlatList
            data={store.likedFood}
            renderItem={({ item }) => <LikedListItem {...item} />}
            keyExtractor={item => item.name}
            contentContainerStyle={{ rowGap: 20 }}
            className='my-[10px]'
          />
      }
    </SafeAreaView>
  )
})

export default LikedTab;
