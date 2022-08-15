import { useMemo } from 'react'
import { StyleProp } from 'react-native'

export const useMergedStyle = <StyleT>(
  style1: StyleT,
  style2?: StyleProp<StyleT>,
  style3?: StyleProp<StyleT>,
  style4?: StyleProp<StyleT>
) => {
  return useMemo(
    () => (style2 || style3 || style4 ? [style1, style2, style3, style4] : style1),
    [style1, style2, style3, style4]
  )
}
