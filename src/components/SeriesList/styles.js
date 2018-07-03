import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from 'styles';

const styles = StyleSheet.create({
  ...general,

  loading: {
    marginVertical: metrics.baseMargin,
  },

  emptyList: {
    color: colors.error,
    fontSize: fonts.small,
    alignSelf: 'center',
    marginVertical: metrics.baseMargin,
  },

});

export default styles;
