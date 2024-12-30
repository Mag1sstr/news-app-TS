import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { INews } from "../interfaces/interfaces";
import axios from "axios";
import { AppDispatch } from "./store";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

interface IInitialState {
  latestNews: INews[];
}

const initialState: IInitialState = {
  latestNews: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setLatestNews(state, action) {
      state.latestNews = action.payload;
    },
  },
});

export function getLatestNews() {
  return function (dispatch: AppDispatch) {
    axios
      .get(`${BASE_URL}latest-news`, {
        params: {
          apiKey: API_KEY,
        },
      })
      .then((resp) => {
        dispatch(setLatestNews(resp.data.news));
      });
  };
}

export const { setLatestNews } = newsSlice.actions;

export default newsSlice.reducer;
