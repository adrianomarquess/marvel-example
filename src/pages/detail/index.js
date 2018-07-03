import React from 'react';
import PropTypes from 'prop-types';

import { View, ScrollView, Image, Text } from 'react-native';
import Header from 'pages/detail/components/Header';
import { SerieItem } from 'components/SeriesList/components/SerieItem';

import styles from './styles';

const Detail = (props) => {
  const { serie } = props.navigation.state.params;

  return (
    <View style={styles.container}>
      <Header title={serie.title} />

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: `${serie.thumbnail.path}.${serie.thumbnail.extension}` }}
        />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.comicsContainer}>
          <Text style={styles.title}>Comics</Text>

          { serie.comics.items.map((comic, index) => (
            <View
              key={comic.resourceURI}
              style={[
                styles.comicsList,
                (index === (serie.comics.items.length - 1)) ? styles['listItem-last'] : {},
              ]}
            >
              <Text style={styles.comicTitle}>{comic.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

Detail.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        serie: PropTypes.shape(SerieItem.propTypes.serie),
      }),
    }),
  }).isRequired,
};

export default Detail;
