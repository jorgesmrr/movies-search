export const getMovieFixture = () => ({
  adult: false,
  backdrop_path: "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
  belongs_to_collection: null,
  budget: 63000000,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
  ],
  homepage: "",
  id: 550,
  imdb_id: "tt0137523",
  original_language: "en",
  original_title: "Fight Club",
  overview:
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  popularity: 0.5,
  poster_path: null,
  production_companies: [
    {
      id: 508,
      logo_path: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
      name: "Regency Enterprises",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "1999-10-12",
  revenue: 100853753,
  runtime: 139,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline:
    "How much can you know about yourself if you've never been in a fight?",
  title: "Fight Club",
  video: false,
  vote_average: 7.8,
  vote_count: 3439,
});

export const getTrendingMoviesFixture = () => ({
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 299536,
      original_language: "en",
      original_title: "Avengers: Infinity War",
      overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      release_date: "2018-04-25",
      title: "Avengers: Infinity War",
      video: false,
      vote_average: 8.3,
      vote_count: 6937,
      popularity: 358.799,
    },
  ],
  total_pages: 792,
  total_results: 15831,
});

export const getSearchMoviesFixture = () => ({
  page: 1,
  results: [
    {
      poster_path: "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
      adult: false,
      overview:
        "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      release_date: "2012-04-25",
      genre_ids: [878, 28, 12],
      id: 24428,
      original_title: "The Avengers",
      original_language: "en",
      title: "The Avengers",
      backdrop_path: "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
      popularity: 7.353212,
      vote_count: 8503,
      video: false,
      vote_average: 7.33,
    },
  ],
  total_results: 14,
  total_pages: 1,
});
