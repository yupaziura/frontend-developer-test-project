import React, { PropsWithChildren } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

import { useStylesInProps, PropsWithStyles } from 'app/utils/hooks/useStylesInProps'
import { useMergedStyle } from 'app/utils/hooks/useMergedStyle'

export const Pressable: React.FC<
  PropsWithChildren<{
    onPress?: () => void
    disabled?: boolean
    style?: StyleProp<ViewStyle>
  }> &
    PropsWithStyles
> = ({ onPress, disabled, style, children, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={useMergedStyle<ViewStyle>(useStylesInProps(rest), style)}
    >
      {children}
    </TouchableOpacity>
  )
}
