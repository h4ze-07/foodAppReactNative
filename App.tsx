/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from './src/screens/OnboardingScreen'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import StoreProvider from './src/store/StoreProvider'
import Login from './src/screens/Login'


const Stack = createNativeStackNavigator();

const App = () => {

  const [isOnboarding, setIsOnboarding] = useState(true);

  useEffect(() => {

  }, [])

  return (
    <StoreProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isOnboarding && <Stack.Screen name='Onboarding' component={OnboardingScreen} />}
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Details'
            component={DetailsScreen}
            options={{
              headerShown: true,
              // headerLeft: () => <Ionicons name='search' size={20} onPress={navigateBack} />,
            }}
          />
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  )
}

export default App
