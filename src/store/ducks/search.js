import { createActions, createReducer } from 'reduxsauce';

// Types & Creators
const { Types, Creators } = createActions({
  searchRequest: ['page', 'text', 'data', 'loading', 'refreshing'],
  searchSuccess: ['data'],
  searchFailure: null,
  searchOpen: null,
  searchClose: null,
  setText: ['text'],
  searchEmpty: null,
});

export { Types };
export default Creators;

// Initial State
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  searchOpened: false,
  searchText: '',
  refreshing: false,
};

// Reducers
export const request = (state, action) => ({
  ...state,
  loading: action.loading,
  refreshing: action.refreshing,
});

export const success = (state, action) => ({
  ...state,
  data: action.data,
  loading: false,
  error: false,
  searchOpened: true,

});

export const failure = state => ({
  ...state,
  loading: false,
  error: true,
  searchOpened: true,
});

export const open = state => ({
  ...state,
  searchOpened: true,
});

export const close = state => ({
  ...state,
  searchOpened: false,
});

export const text = (state, action) => ({
  ...state,
  loading: true,
  searchText: action.text,
});

export const empty = state => ({
  ...state,
  data: [],
  loading: false,
  refreshing: false,
  searchText: '',
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_REQUEST]: request,
  [Types.SEARCH_SUCCESS]: success,
  [Types.SEARCH_FAILURE]: failure,
  [Types.SEARCH_OPEN]: open,
  [Types.SEARCH_CLOSE]: close,
  [Types.SET_TEXT]: text,
  [Types.SEARCH_EMPTY]: empty,
});
