import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeTab from './tabs/HomeTab';
import LikedTab from './tabs/LikedTab';
import CartTab from './tabs/CartTab';
import HomeSvg from '../assets/svg/HomeSvg';
import LikeSvg from '../assets/svg/LikeSvg';
import CartSvg from '../assets/svg/CartSvg';
import Icon from 'react-native-vector-icons/FontAwesome';
import SkeletonHomeScreen from './SkeletonHomeScreen';
import StoreProvider from '../store/StoreProvider';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <StoreProvider>
            <Tab.Navigator screenOptions={{ tabBarStyle: { height: 60 }, tabBarActiveTintColor: '#F9813A', tabBarInactiveTintColor: '#908e8c' }}>
                <Tab.Screen name='HomeTab' component={HomeTab}
                    options={{ headerShown: false, tabBarIcon: ({ color }) => (<HomeSvg width={28} height={28} fill={color} />), tabBarShowLabel: false }} />
                <Tab.Screen name='LikedTab' component={LikedTab}
                    options={{ tabBarIcon: ({ color }) => (<Icon name='heart' color={color} size={25} />), tabBarShowLabel: false, headerTitle: 'Liked' }} />
                <Tab.Screen name='CartTab' component={CartTab}
                    options={{ tabBarIcon: ({ color }) => (<Icon name='shopping-cart' color={color} size={25} />), tabBarShowLabel: false, headerTitle: 'Cart' }} />
                <Tab.Screen name='Skelet' component={SkeletonHomeScreen}
                    options={{ tabBarIcon: ({ color }) => (<Icon name='wrench' color={color} size={25} />), tabBarShowLabel: false, headerShown: false }} />
            </Tab.Navigator>
        </StoreProvider>
    )
}

export default HomeScreen

