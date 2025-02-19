/// <reference types="redux-persist" />

import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from '../services/charactersApi';
import appReducer from './appSlice';
import favoritesReducer from './favoritesSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: "root",
  storage,
};

const persistedCharApiReducer = persistReducer(persistConfig, charactersApi.reducer);


export const store = configureStore({
  reducer: {
    // [charactersApi.reducerPath]: charactersApi.reducer,
    [charactersApi.reducerPath]: persistedCharApiReducer,
    app: appReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
