import { useMemo } from 'react'
import { ViewStyle } from 'react-native'

export type PropsWithStyles = {
  m?: number
  mx?: number
  my?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number

  p?: number
  px?: number
  py?: number
  pt?: number
  pr?: number
  pb?: number
  pl?: number

  flex?: number
  flexDirection?: ViewStyle['flexDirection']
  alignItems?: ViewStyle['alignItems']
  justifyContent?: ViewStyle['justifyContent']
  alignSelf?: ViewStyle['alignSelf']
}

export const useStylesInProps = (props: PropsWithStyles) =>
  useMemo(
    () => ({
      margin: props.m,
      marginHorizontal: props.mx,
      marginVertical: props.my,
      marginTop: props.mt,
      marginRight: props.mr,
      marginBottom: props.mb,
      marginLeft: props.ml,
      padding: props.p,
      paddingHorizontal: props.px,
      paddingVertical: props.py,
      paddingTop: props.pt,
      paddingRight: props.pr,
      paddingBottom: props.pb,
      paddingLeft: props.pl,
      flex: props.flex,
      flexDirection: props.flexDirection,
      alignItems: props.alignItems,
      justifyContent: props.justifyContent,
      alignSelf: props.alignSelf
    }),
    [
      props.m,
      props.mx,
      props.my,
      props.mt,
      props.mr,
      props.mb,
      props.ml,
      props.p,
      props.px,
      props.py,
      props.pt,
      props.pr,
      props.pb,
      props.pl,
      props.flex,
      props.flexDirection,
      props.alignItems,
      props.justifyContent,
      props.alignSelf
    ]
  )
