import React from 'react'
import { Text, StyleProp, TextStyle } from 'react-native'

import { useMergedStyle } from 'app/utils/hooks/useMergedStyle'
import { useStylesInProps, PropsWithStyles } from 'app/utils/hooks/useStylesInProps'

import styles from './Header.styles'

export const Header: React.FC<
  React.PropsWithChildren<
    {
      style?: StyleProp<TextStyle>
    } & PropsWithStyles
  >
> = ({ style, children, ...rest }) => {
  return (
    <Text style={useMergedStyle<TextStyle>(styles.header, useStylesInProps(rest), style)}>
      {children}
    </Text>
  )
}
