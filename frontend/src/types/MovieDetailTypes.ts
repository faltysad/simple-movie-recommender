export interface TMDBMovie {
  title: string;
  backdrop_path: string;
  overview: string;
  genres: Array<{ id: number; name: string }>;
  videos: { results: Array<{ id: number; key: string; title: string }> };
}
