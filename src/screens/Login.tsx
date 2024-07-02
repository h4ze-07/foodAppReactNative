import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Login = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handleLogin = () => navigation.navigate('Home');


    return (
        <SafeAreaView className='flex-1 bg-mainWhite p-[10px]'>
            <Text>Login Page</Text>
            <CustomButton 
                text='Login'
                textStyles=''
                containerStyles=''
                onClick={handleLogin}
            />
        </SafeAreaView>
    )
}

export default Login
