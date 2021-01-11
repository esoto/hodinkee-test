import { call, put, takeLeading } from "redux-saga/effects";
import axios from "axios";

import { loadArticles, loadCompleted, } from "./slice";
import { TOKEN_STORAGE_KEY } from "config/constants";

export const requestArticles = ()=> {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY) || "";
  axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
  return axios
    .get('/articles/', {
      headers: {
        'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
    });
}
export function* handleLoadArticles() {
  try {
    const response = yield call(requestArticles);
    yield put(loadCompleted({
      articles: response.data.articles,
      remoteArticles: response.data.remote_articles,
    }));
  } catch (error) {
    console.log(error);
  }
}

const watchers = [
  takeLeading(loadArticles, handleLoadArticles),
];

export default watchers;
