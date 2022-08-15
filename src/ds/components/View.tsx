import React from 'react'
import { View as ViewBase, StyleProp, ViewStyle } from 'react-native'

import { useMergedStyle } from 'app/utils/hooks/useMergedStyle'
import { useStylesInProps, PropsWithStyles } from 'app/utils/hooks/useStylesInProps'

export const View: React.FC<
  React.PropsWithChildren<
    {
      style?: StyleProp<ViewStyle>
    } & PropsWithStyles
  >
> = ({ style, children, ...rest }) => {
  return (
    <ViewBase style={useMergedStyle<ViewStyle>(useStylesInProps(rest), style)}>{children}</ViewBase>
  )
}
