import React from "react";
import { IRecommendedMovie } from "../../types/RecommendationTypes";
import { Text, Box, Button } from "grommet";
import { Star } from "grommet-icons";
import { redirectToMovieDetail } from "../../utils/redirectToMovieDetail";
import { useHistory } from "react-router-dom";


interface ISearchMovieResult {
  movie: IRecommendedMovie;
  onClick: (movieId: number, rating: number) => void;
}


const SearchMovieResult: React.SFC<ISearchMovieResult> = props => {
  const { movie, onClick } = props;
  const history = useHistory();

  return (
    <Box
      direction="row"
      justify="between"
      pad="xsmall"
      onClick={() => redirectToMovieDetail(movie.title, history)}
    >
      <Text>{movie.title}</Text>
      <Button
        icon={<Star />}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onClick(movie.movieId, 5);
        }}
        primary
      />
    </Box>
  );
};

export default SearchMovieResult;
