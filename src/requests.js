import API_KEY from '../tmdbApiKey';

// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentories: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };
const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&region=US&sort_by=release_date.asc&networks=Netflix&release_date.gte=2017-05-01
  `,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}b&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
  fetchDocumentories: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
};

export default requests;
