import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    backgroundColor: colors.white,
    flex: 1,
    height: 30,
    borderRadius: metrics.smallRadius,
    paddingHorizontal: metrics.smallMargin,
    paddingVertical: 0,
  },

  closeButton: {
    width: 24,
    marginLeft: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
