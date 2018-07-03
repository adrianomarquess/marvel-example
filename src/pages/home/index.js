import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import Header from 'pages/home/components/Header';
import SeriesList from 'components/SeriesList';

// Redux
import { connect } from 'react-redux';

import styles from './styles';

class Home extends Component {
  static propTypes = {
    series: PropTypes.shape({}).isRequired,
    search: PropTypes.shape({}).isRequired,
  };

  render() {
    const { series, search } = this.props;

    return (
      <View style={styles.container}>
        <Header />

        { search.searchOpened
          ? <SeriesList series={search} />
          : <SeriesList series={series} />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  series: state.series,
  search: state.search,
});

export default connect(mapStateToProps)(Home);
