import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Redux
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { colors } from 'styles';
import styles from './styles';

export class SerieItem extends Component {
  static propTypes = {
    serie: PropTypes.shape({
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
      title: PropTypes.string,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  navigateToDetail = () => {
    const { serie, dispatch } = this.props;

    return dispatch(NavigationActions.navigate({
      routeName: 'Detail',
      params: { serie },
    }));
  };

  render() {
    const { serie } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.navigateToDetail}
        activeOpacity={0.5}
      >
        <Image
          style={styles.image}
          source={{ uri: `${serie.thumbnail.path}.${serie.thumbnail.extension}` }}
        />

        <Text
          style={styles.title}
          numberOfLines={2}
        >
          {serie.title}
        </Text>

        <Icon size={22} name="angle-right" color={colors.regular} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

export default connect()(SerieItem);
