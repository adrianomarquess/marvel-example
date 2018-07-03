import api, { apiConfig, hashMd5 } from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/series';

export function* getSeries(action) {
  const limit = 20;
  const offSet = action.page === 1 ? 0 : (limit * (action.page - 1));

  const response = yield call(api.get, `/series?ts=${apiConfig.timestamp}&apikey=${apiConfig.PUBLIC_KEY}&hash=${hashMd5}&contains=comic&orderBy=-startYear&offset=${offSet}&limit=${limit}`);

  if (response.ok) {
    const filtered = response.data.data.results.filter((serie) => {
      const c = action.data.find(item => item.id === serie.id);
      return c ? null : serie.id;
    });

    yield put(ActionCreators.seriesSuccess(action.data.concat(filtered)));
  } else {
    yield put(ActionCreators.seriesFailure());
  }
}
