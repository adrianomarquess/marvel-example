import { createActions, createReducer } from 'reduxsauce';

// Types & Creators
const { Types, Creators } = createActions({
  seriesRequest: ['page', 'data', 'loading', 'refreshing'],
  seriesSuccess: ['data'],
  seriesFailure: null,
});

export { Types };
export default Creators;

// Initial State
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  refreshing: false,
};

// Reducers
export const request = (state, action) => ({
  ...state,
  loading: action.loading,
  refreshing: action.refreshing,
});

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: false,
});

export const failure = state => ({
  ...state,
  loading: false,
  error: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SERIES_REQUEST]: request,
  [Types.SERIES_SUCCESS]: success,
  [Types.SERIES_FAILURE]: failure,
});
