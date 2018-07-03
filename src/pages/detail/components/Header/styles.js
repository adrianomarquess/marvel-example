import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight + metrics.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },

  title: {
    color: colors.white,
    fontSize: fonts.title,
    fontWeight: '800',
    textAlign: 'left',
    flex: 1,
  },

  leftButton: {
    marginRight: metrics.baseMargin,
    width: 24,
  },

});

export default styles;
