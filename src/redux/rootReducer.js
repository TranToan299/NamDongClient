import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slice
import loadingReducer from "./slices/LoadingSlice";
import contactReducer from "./slices/ContactSlice";
import productReducer from "./slices/ProductSlice";
import eventReducer from "./slices/EventSlice";
import imagesListReducer from "./slices/GetImagesSlice";


export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

export const productPersistConfig = {
  key: "product",
  storage,
  keyPrefix: "redux-",
  whitelist: ["cartProduct"],
};

const rootReducer = combineReducers({
  loading: loadingReducer,
  event: eventReducer,
  contact: contactReducer,
  product: persistReducer(productPersistConfig, productReducer),
  imagesList: imagesListReducer,

});

export default rootReducer;
