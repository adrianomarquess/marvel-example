import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Redux
import { connect } from 'react-redux';
import SearchActions from 'store/ducks/search';

import { colors } from 'styles';
import styles from './styles';

class Search extends Component {
  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    searchEmpty: PropTypes.func.isRequired,
    searchClose: PropTypes.func.isRequired,
    setText: PropTypes.func.isRequired,
    search: PropTypes.shape({
      searchText: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.searchSeries = _.debounce(this.searchSeries, 700);
  }

  searchSeries = () => {
    this.props.searchRequest(1, this.props.search.searchText, [], true, false);
  }

  inputChangeText = async (text) => {
    await this.props.setText(text);

    if (this.props.search.searchText.length > 0) {
      this.searchSeries();
    } else {
      this.props.searchEmpty();
    }
  };

  render() {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Busque uma série"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          onChangeText={this.inputChangeText}
          autoFocus
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => this.props.searchClose()}
          activeOpacity={0.5}
        >
          <Icon name="close" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  searchRequest: (page, text, data, loading, refreshing) =>
    dispatch(SearchActions.searchRequest(page, text, data, loading, refreshing)),

  searchClose: () => dispatch(SearchActions.searchClose()),
  setText: text => dispatch(SearchActions.setText(text)),
  searchEmpty: () => dispatch(SearchActions.searchEmpty()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
