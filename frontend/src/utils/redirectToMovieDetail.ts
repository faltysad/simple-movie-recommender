import axios from "axios";
import * as H from 'history';

export const redirectToMovieDetail = async (movieTitle: string, reactRouterHistory: H.History<any>) => {
    const normalizedTitle = movieTitle.replace(/ *\([^)]*\) */g, "");
    const data = await axios.get(
      `${process.env.REACT_APP_TMDB_API_URL}/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${normalizedTitle}&page=1`
    );

    if (data.data.results && data.data.results.length) {
      reactRouterHistory.push(`/detail/${data.data.results[0].id}`);
    }
  };