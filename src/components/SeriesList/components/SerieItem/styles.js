import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: metrics.baseMargin,
    marginTop: metrics.smallMargin,

    borderRadius: metrics.smallRadius,
    padding: metrics.baseMargin,

    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 40,
    height: 40,
    marginRight: metrics.baseMargin,
    resizeMode: 'contain',
  },

  title: {
    flex: 1,
    color: colors.black,
    fontSize: fonts.regular,
  },

  icon: {
    marginLeft: metrics.baseMargin,
  },

});

export default styles;
