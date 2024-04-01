import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/LoadingSlice";
import namDongReducer from "./slices/ContactSlice";
import productReducer from "./slices/ProductSlice";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer, { rootPersistConfig } from "./rootReducer";

import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();
export { persistor, store, dispatch, useSelector, useDispatch };
