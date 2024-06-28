import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeTab from './tabs/HomeTab';
import LikedTab from './tabs/LikedTab';
import CartTab from './tabs/CartTab';
import HomeSvg from '../assets/svg/HomeSvg';
import LikeSvg from '../assets/svg/LikeSvg';
import CartSvg from '../assets/svg/CartSvg';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: {height: 40, elevation: 0, borderTopWidth: 0}, tabBarActiveTintColor: '#F9813A', tabBarInactiveTintColor: '#908e8c'}}>
            <Tab.Screen name='HomeTab' component={HomeTab} 
                options={{headerShown: false, tabBarIcon: ({color}) => (<HomeSvg width={28} height={28} style={{marginBottom: 20}} fill={color}/>), tabBarShowLabel: false}} />
            <Tab.Screen name='LikedTab' component={LikedTab} 
                options={{ tabBarIcon: ({color}) => (<LikeSvg width={30} height={30} fill={color} style={{marginBottom: 20}} />), tabBarShowLabel: false, headerTitle: 'Liked'}} />
            <Tab.Screen name='CartTab' component={CartTab} 
                options={{tabBarIcon: ({color}) => (<CartSvg width={28} height={28} style={{marginBottom: 20}} fill={color} />), tabBarShowLabel: false, headerTitle: 'Cart'}} />
        </Tab.Navigator>
    )
}

export default HomeScreen

