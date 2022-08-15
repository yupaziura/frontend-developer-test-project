import { StyleSheet } from 'react-native'

import colors from 'app/theme/colors'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.card.background,
    borderWidth: 1,
    borderColor: colors.card.border,
    borderRadius: 8
  }
})
