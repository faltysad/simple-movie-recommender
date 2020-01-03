import { Box, Heading, Text } from "grommet";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./../../utils/useFetch";
import { TMDBMovie } from "../../types/MovieDetailTypes";
import Loading from "../Loading";

const MovieDetail: React.SFC = () => {
  let { movieId } = useParams();

  const data = useFetch(
    `${process.env.REACT_APP_TMDB_API_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`
  );

  if (data.isLoading) {
    return <Loading />;
  }

  if (data.error || !data.response) {
    return <span>Error</span>;
  }

  const movie = (data.response as unknown) as TMDBMovie;

  return (
    <Box
      fill
      direction="row"
      background={{
        color: "dark-1",
        image: `linear-gradient(0deg, rgba(33, 33, 33, 0.95), rgba(33, 33, 33, 0.95)), url(${process.env.REACT_APP_TMDB_POSTER_URL}/original/${movie.backdrop_path})`
      }}
    >
      <Box flex align="center" justify="center">
        {movie.videos && movie.videos.results.length ? (
          <iframe
            title={movie.videos.results[0].title}
            width="560"
            height="315"
            src={`${process.env.REACT_APP_YOUTUBE_EMBED_URL}/${movie.videos.results[0].key}`}
            allow="autoplay; encrypted-media; fullscreen"
          ></iframe>
        ) : (
          <Text>No trailer available</Text>
        )}
      </Box>
      <Box flex justify="center">
        <Heading level="2" margin="none">
          {movie.title}
        </Heading>
        <Heading level="4">Summary</Heading>
        <Text>{movie.overview}</Text>
        <Heading level="4">Genre</Heading>
        {movie.genres.map(genre => {
          return <Text key={genre.id}>{genre.name}</Text>;
        })}
      </Box>
    </Box>
  );
};

export default MovieDetail;
