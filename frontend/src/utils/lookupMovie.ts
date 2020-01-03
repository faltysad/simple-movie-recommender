import movielens from "./../data/movielens.json";

export const lookupMovie = (movieTitle: string) => {
    const matchedMovies = movielens.filter(movie => movie.title.includes(movieTitle));


    return (matchedMovies && matchedMovies.length) ? matchedMovies : [];
}

export const lookupMovieById = (movieId: number | string) => {
    const matchedMovie = movielens.find(movie => movie.movieId == movieId);
    return matchedMovie ? matchedMovie : null;
}