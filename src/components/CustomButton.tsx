import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TCsutomButtonProps } from '../types'

const CustomButton = ({ text, containerStyles, textStyles, onClick }: TCsutomButtonProps) => {
    return (
        <TouchableOpacity
            className={containerStyles}
            onPress={onClick}
        >
            <Text className={textStyles}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton
