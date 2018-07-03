import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Redux
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { colors } from 'styles';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    back: PropTypes.func.isRequired,
  };

  navigateBack = () => {
    this.props.back();
  };

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={this.props.back} activeOpacity={0.5} style={styles.leftButton}>
          <Icon name="angle-left" size={30} color={colors.white} />
        </TouchableOpacity>

        <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  back: () => dispatch(NavigationActions.back()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
