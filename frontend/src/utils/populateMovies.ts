import { lookupMovieById } from "./lookupMovie";
import { isNotNull } from "./isNotNull";
  
const populateMovie = (movieId: string) => {
    const matchedMovie = lookupMovieById(movieId);
    return matchedMovie;
}


export const populateMovies = (movieIds: string[]) => {
    return movieIds.map(movieId => populateMovie(movieId)).filter(isNotNull);

}