import { Box, Heading } from "grommet";
import React from "react";
import { useHistory } from "react-router-dom";
import { redirectToMovieDetail } from "../../utils/redirectToMovieDetail";
import Responsive from "../Responsive";
import { columns, rows } from "./../Responsive";
import { IRecommendedMovie, IRecommendedMoviesProps } from "../../types/RecommendationTypes";


const ReccomendedMovies: React.SFC<IRecommendedMoviesProps> = props => {
  const { recommendedMovies } = props;

  const history = useHistory();

  return (
    <>

      <Responsive rows={rows} columns={columns} gap="medium">
        {recommendedMovies.map((movie: IRecommendedMovie) => {
          return (
            <Box
              elevation="large"
              key={movie.movieId}
              background="light-3"
              flex={false}
              justify="center"
              align="center"
              onClick={() => redirectToMovieDetail(movie.title, history)}
            >
              <Heading level={3}>{movie.title}</Heading>
            </Box>
          );
        })}
      </Responsive>
    </>
  );
};

export default ReccomendedMovies;
