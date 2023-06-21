import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './Component/moviesApi';
import App from './App';

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    // Add any other reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
