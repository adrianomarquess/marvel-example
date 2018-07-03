import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Redux
import { connect } from 'react-redux';
import SearchActions from 'store/ducks/search';

import { colors } from 'styles';

import Search from './components/Search';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    searchOpen: PropTypes.func.isRequired,
    search: PropTypes.shape({
      searchOpened: PropTypes.bool,
    }).isRequired,
  };

  renderSearch = () => (
    <View style={styles.headerContainer}>
      <Search />
    </View>
  );

  renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.leftButton} />

      <Text style={styles.title}>Fullbar Marvel</Text>

      <TouchableOpacity
        style={styles.rightButton}
        onPress={this.props.searchOpen}
        activeOpacity={0.5}
      >
        <Icon name="search" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      this.props.search.searchOpened
        ? this.renderSearch()
        : this.renderHeader()
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  searchOpen: () => dispatch(SearchActions.searchOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
