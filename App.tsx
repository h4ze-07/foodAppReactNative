/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from './src/screens/OnboardingScreen'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import Ionicons from '@react-native-vector-icons/ionicons';


const Stack = createNativeStackNavigator();

const App = ({navigation}: any) => {

  const navigateBack = () => {
    navigation.goBack();
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Onboarding' component={OnboardingScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' 
          component={DetailsScreen} 
          options={{
            headerShown: true,
            // headerLeft: () => <Ionicons name='search' size={20} onPress={navigateBack} />,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
