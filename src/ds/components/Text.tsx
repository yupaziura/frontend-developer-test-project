import React from 'react'
import { Text as TextBase, StyleProp, TextStyle } from 'react-native'

import { useMergedStyle } from 'app/utils/hooks/useMergedStyle'
import { useStylesInProps, PropsWithStyles } from 'app/utils/hooks/useStylesInProps'
import typefaces from 'app/theme/typefaces'
import colors from 'app/theme/colors'

export const Text: React.FC<
  React.PropsWithChildren<
    {
      typeface?: keyof typeof typefaces
      color?: keyof typeof colors['text']
      style?: StyleProp<TextStyle>
    } & PropsWithStyles
  >
> = ({ typeface = 'default/16', color = 'default', style, children, ...rest }) => {
  return (
    <TextBase
      style={useMergedStyle<TextStyle>(
        {
          ...(typefaces[typeface] as TextStyle),
          color: colors.text[color]
        },
        useStylesInProps(rest),
        style
      )}
    >
      {children}
    </TextBase>
  )
}
