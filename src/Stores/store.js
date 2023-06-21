import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { moviesApi } from './Component/moviesApi';

// Create the Redux store
const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        // Add your other reducers here if applicable
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
});

// Set up listeners for RTK-Query
setupListeners(store.dispatch);

export default store;
