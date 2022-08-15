import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

import { useMergedStyle } from 'app/utils/hooks/useMergedStyle'
import { useStylesInProps, PropsWithStyles } from 'app/utils/hooks/useStylesInProps'

import styles from './Card.styles'

export const Card: React.FC<
  React.PropsWithChildren<
    {
      style?: StyleProp<ViewStyle>
    } & PropsWithStyles
  >
> = ({ style, children, ...rest }) => {
  return (
    <View style={useMergedStyle<ViewStyle>(styles.container, useStylesInProps(rest), style)}>
      {children}
    </View>
  )
}
