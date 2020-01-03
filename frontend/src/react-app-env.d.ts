/// <reference types="react-scripts" />


declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      REACT_APP_AZURE_API_ENDPOINT: string
      REACT_APP_AMLS_API_KEY: string
      REACT_APP_AZURE_SUBSCRIPTION_KEY: string
      REACT_APP_TMDB_API_KEY: string
      REACT_APP_TMDB_API_URL: string
      REACT_APP_TMDB_POSTER_URL: string
      REACT_APP_YOUTUBE_EMBED_URL: string
    }
  }
