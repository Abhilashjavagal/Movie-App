import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'f33f85f8';

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com/' }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: (searchTerm) => ({
                url: '',
                params: {
                    s: searchTerm,
                    apiKey: API_KEY,
                },
            }),
        }),
        getMovieById: builder.query({
            query: (imdbID, plot) => ({
                url: '',
                params: {
                    i: imdbID,
                    apiKey: API_KEY,
                    plot: plot,
                },
            }),
        }),
    }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
