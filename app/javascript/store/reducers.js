import { combineReducers } from "@reduxjs/toolkit";

import articles from 'store/articles/slice'

const reducers = {
  articles,
};

const rootReducer = combineReducers(reducers);
export { rootReducer };
