import { takeLatest } from 'redux-saga/effects';

// Types
import { Types as SeriesTypes } from 'store/ducks/series';
import { Types as SearchTypes } from 'store/ducks/search';

// Sagas
import { getSeries } from './series';
import { getSeriesSearch } from './search';

export default function* root() {
  yield [
    takeLatest(SeriesTypes.SERIES_REQUEST, getSeries),

    takeLatest(SearchTypes.SEARCH_REQUEST, getSeriesSearch),
  ];
}

