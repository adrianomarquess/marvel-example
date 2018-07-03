import api, { apiConfig, hashMd5 } from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/search';

export function* getSeriesSearch(action) {
  const limit = 20;
  const offSet = action.page === 1 ? 0 : (limit * (action.page - 1));

  const isNumber = Number(action.text);
  let parameter = '';

  if (isNumber || isNumber === 0) {
    parameter = `startYear=${action.text}`;
  } else {
    parameter = `titleStartsWith=${action.text}`;
  }

  const response = yield call(api.get, `/series?ts=${apiConfig.timestamp}&apikey=${apiConfig.PUBLIC_KEY}&hash=${hashMd5}&${parameter}&contains=comic&orderBy=-startYear&offset=${offSet}&limit=${limit}`);

  if (response.ok) {
    const filtered = response.data.data.results.filter((serie) => {
      const c = action.data.find(item => item.id === serie.id);
      return c ? null : serie.id;
    });

    yield put(ActionCreators.searchSuccess(action.data.concat(filtered)));
  } else {
    yield put(ActionCreators.searchFailure());
  }
}
