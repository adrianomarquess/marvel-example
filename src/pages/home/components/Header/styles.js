import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.baseMargin,

    height: metrics.navBarHeight + metrics.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  },

  title: {
    color: colors.white,
    fontSize: fonts.title,
    fontWeight: '800',
    textAlign: 'center',
    flex: 1,
  },

  rightButton: {
    width: 22,
    marginLeft: metrics.baseMargin,
  },

  leftButton: {
    marginRight: metrics.baseMargin,
    width: 22,
  },

});

export default styles;
