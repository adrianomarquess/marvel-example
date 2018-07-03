import { combineReducers } from 'redux';

// Reducers
import navReducer from 'navigation/reducer';
import { reducer as series } from './ducks/series';
import { reducer as search } from './ducks/search';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    series,
    search,
  });

  return configureStore(rootReducer, rootSaga);
};
