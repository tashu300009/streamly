import makeAxiosCall from "./api";
import queryString from "query-string";

export const searchMovie = async ({ data }) =>
  makeAxiosCall({
    method: "GET",
    url: `3/search/multi?${queryString.stringify(data)}`,
  });

export const findMovieById = async ({ id }) =>
  makeAxiosCall({
    method: "GET",
    url: `3/movie/${id}`,
  });
