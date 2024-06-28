import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { TexlLinkProps } from '../types'

const TextLink = ({ text, textStyles, containerStyles, onClick }: TexlLinkProps) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View className={containerStyles}>
                <Text className={textStyles}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TextLink

const styles = StyleSheet.create({})