import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  remoteArticles: []
};

export const slice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    loadArticles: (state) => {
      state.isLoading = true;
    },
    loadCompleted: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload.articles;
      state.remoteArticles = action.payload.remoteArticles;
    },
  }
});

export const {
  loadArticles,
  loadCompleted,
} = slice.actions;

export const selectIsLoading = (state) => state.articles.isLoading;
export const selectArticles = (state) => state.articles.articles;
export const selectRemoteArticles = (state) => state.articles.remoteArticles;

export default slice.reducer;
