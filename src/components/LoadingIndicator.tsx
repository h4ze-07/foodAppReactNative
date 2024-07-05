import { ActivityIndicator} from 'react-native'
import React from 'react'

type TIndicatorProps = {
    styles: string,
    size: number,
    color: string,
}

const LoadingIndicator = ({styles, size, color}: TIndicatorProps) => {
  return (
    <ActivityIndicator className={styles} color={color} size={size} />
  )
}

export default LoadingIndicator
