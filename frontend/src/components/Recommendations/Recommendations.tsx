import { Box, Heading, TextInput, Text } from "grommet";
import React, { useEffect, useState } from "react";
import { lookupMovie } from "../../utils/lookupMovie";
import { populateMovies } from "../../utils/populateMovies";
import { recommendMovie } from "../../utils/recommendMovie";
import ReccomendedMovies from "./RecommendedMovies";
import { IRecommendedMovie } from "../../types/RecommendationTypes";
import SearchMovieResult from "./SearchMovieResult";
import Loading from "../Loading";

const Recommendations: React.SFC = () => {
  const [recommendedMovies, setRecommendedMovies] = useState<IRecommendedMovie[]>([]);
  const [searchResults, setSearchResults] = useState<IRecommendedMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const recommendations = localStorage.getItem("recommendations");
    if (recommendations) {
      const populatedMovies = populateMovies(JSON.parse(recommendations));
      populatedMovies.filter(movie => movie != null);
      if (populateMovies.length) {
        setRecommendedMovies(populatedMovies);
      }
    }
  }, []);

  const handleRecommendMovieClick = async (movieId: number, movieRating: number) => {
    setLoading(true);

    const recommendations = await recommendMovie(movieId, movieRating);

    const populatedMovies = populateMovies(recommendations);
    setRecommendedMovies(populatedMovies);

    setSearchResults([]);
    setLoading(false);
  };

  const searchJSON = (movieTitle: string) => {
    setSearchInput(movieTitle);

    if (!movieTitle) {
      setSearchResults([]);
    }

    if (movieTitle && movieTitle.length >= 3) {
      const matchedMovies: IRecommendedMovie[] = lookupMovie(movieTitle);
      setSearchResults(matchedMovies);
    }
  };

  return (
    <>
      <Box fill pad="large">
        <Box align="center" justify="start" margin={{ bottom: "large" }}>
          <TextInput
            type="text"
            value={searchInput}
            onChange={e => searchJSON(e.target.value)}
            suggestions={searchResults.map(searchResult => ({
              value: searchResult.title,
              label: <SearchMovieResult movie={searchResult} onClick={handleRecommendMovieClick} />
            }))}
            placeholder={<Text color="dark-3">Search for a movie you've enjoyed</Text>}
          />
        </Box>

        <Heading level={2} alignSelf="center">
          Recommendations
        </Heading>

        {loading ? <Loading /> : <ReccomendedMovies recommendedMovies={recommendedMovies} />}
      </Box>
    </>
  );
};

export default Recommendations;
