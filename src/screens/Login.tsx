import { Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
    const [name, setName] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handleInputChange = (name: string) => {
        setName(name)
    }

    const handleLogin = async () => {
        if (typeof name === 'string' && name.length > 0) {
            try {
                await AsyncStorage.setItem('UserName', name)
                await AsyncStorage.setItem('Onboarding', 'false')
            } catch (error) {
                Alert.alert(error+'')
            }
            navigation.navigate('Home')
        } else {
            return null;
        }
    }


    return (
        <SafeAreaView className='flex-1 bg-mainWhite p-[10px] justify-center items-center'>
            <TextInput
                placeholder='Enter your name'
                className='border w-[90%] mx-auto px-4 py-3 mb-[40px] placeholder:text-mainGrey text-base rounded-md text-mainDark'
                onChangeText={(value) => handleInputChange(value)}
            />
            <CustomButton
                text='Login'
                textStyles='font-bold text-mainWhite text-[20px] uppercase'
                containerStyles='bg-primary rounded-[20px] px-[70px] py-[10px]'
                onClick={handleLogin}
            />
        </SafeAreaView>
    )
}

export default Login
