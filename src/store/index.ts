import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { logger } from 'redux-logger';
import { charactersSlice } from './characters/charactersSlice';

const rootReducer = combineReducers({
  characters: charactersSlice.reducer,
});


export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export default store;

