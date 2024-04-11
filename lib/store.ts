import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sportDataSlice from "./features/sportData/sportDataSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Define a function to create a noop storage for non-browser environments
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

// Create a noop storage for server-side rendering or non-browser environments
const storageNoop =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// Combine reducers
const rootReducer = combineReducers({
  sportDataSlice,
});

// Configuration for Redux persist
const persistConfig = {
  key: "root",
  storage: storageNoop,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the Redux persistor
const persistor = persistStore(store);

// Export the Redux store and persistor
export { store, persistor };

// Define the types for dispatch and root state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
