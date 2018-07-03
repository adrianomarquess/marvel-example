import { StyleSheet } from 'react-native';
import { general, colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  imageContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.regular,
  },

  image: {
    width: metrics.screenWidth,
    height: 200,
    resizeMode: 'contain',
  },

  comicsContainer: {
    paddingVertical: metrics.smallMargin,
  },

  title: {
    paddingHorizontal: metrics.baseMargin,
    marginBottom: metrics.smallMargin,
    color: colors.regular,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },

  comicsList: {
    backgroundColor: colors.white,
    borderTopWidth: 0.5,
    borderTopColor: colors.regular,
    paddingHorizontal: metrics.baseMargin,
    paddingVertical: metrics.smallMargin,
  },

  'listItem-last': {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.regular,
  },

  comicTitle: {
    color: colors.black,
    fontSize: fonts.regular,
  },

});

export default styles;
