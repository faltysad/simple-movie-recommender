export interface IRecommendedMovie {
    movieId: number;
    title: string;
    genres: string;
}

export interface IRecommendedMoviesProps {
    recommendedMovies: IRecommendedMovie[];
}