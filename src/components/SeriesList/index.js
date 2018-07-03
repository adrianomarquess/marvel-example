import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import SeriesActions from 'store/ducks/series';
import SearchActions from 'store/ducks/search';

import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import SerieItemComponent, { SerieItem } from './components/SerieItem';

import styles from './styles';

class SeriesList extends Component {
  static propTypes = {
    series: PropTypes.shape({
      data: PropTypes.arrayOf(SerieItem.propTypes.serie),
      loading: PropTypes.bool,
      error: PropTypes.bool,
      searchOpened: PropTypes.bool,
      searchText: PropTypes.string,
      refreshing: PropTypes.bool,
    }).isRequired,
    seriesRequest: PropTypes.func.isRequired,
    searchRequest: PropTypes.func.isRequired,
  };

  state = {
    page: 1,
  }

  componentDidMount() {
    this.props.seriesRequest(this.state.page, [], true, false);
  }

  loadMore = () => {
    const { series } = this.props;

    if (!series.loading && !this.onEndReachedCalledDuringMomentum) {
      this.onEndReachedCalledDuringMomentum = true;

      this.setState({ page: this.state.page + 1 }, () => {
        if (this.props.series.searchOpened) {
          this.props.searchRequest(this.state.page, series.searchText, series.data, false, true);
        } else {
          this.props.seriesRequest(this.state.page, series.data, false, true);
        }
      });
    }
  }

  renderSerie = ({ item }) => (
    <SerieItemComponent serie={item} />
  );

  renderFooter = () => (
    this.props.series.refreshing
      ? <ActivityIndicator size="small" color="#000" style={styles.loading} />
      : <View />
  );

  renderList = () => {
    const { series } = this.props;

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={series.data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderSerie}
        ListEmptyComponent={this.renderEmpty}
        ListFooterComponent={this.renderFooter}
        refreshing={series.refreshing}
        onEndReached={() => this.loadMore()}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
      />
    );
  };

  renderEmpty = () => (
    (this.props.series.error || this.props.series.data.length === 0) && !this.props.series.loading
      ? <Text style={styles.emptyList}>Nenhuma série encontrada</Text>
      : null
  );

  render() {
    return (
      <View style={styles.container} >
        { this.props.series.loading
          ? <ActivityIndicator size="small" color="#000" style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  seriesRequest: (page, data, loading, refreshing) =>
    dispatch(SeriesActions.seriesRequest(page, data, loading, refreshing)),

  searchRequest: (page, text, data, loading, refreshing) =>
    dispatch(SearchActions.searchRequest(page, text, data, loading, refreshing)),
});

export default connect(null, mapDispatchToProps)(SeriesList);
