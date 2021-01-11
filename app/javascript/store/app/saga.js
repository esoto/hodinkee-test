import { put, call, all, select } from "redux-saga/effects";

import { TOKEN_STORAGE_KEY } from "config/constants";

import { handleLoadArticles } from "store/articles/saga";
import { startBoot, completeBoot } from "./slice";

function* handleSaveCurrentUserToken() {
    const token = document.getElementsByName("csrf-token")[0].content;
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function* bootApplication() {
  yield put(startBoot());
  yield all([
      call(handleSaveCurrentUserToken),
      call(handleLoadArticles),
  ]);
  yield put(completeBoot());
}
