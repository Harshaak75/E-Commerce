import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import strictLoginUsersReducer from "./Slice";

import CartUpdate from "./Cartslice"


const persistConfig = {
    key: "root",
    storage,
  //   whitelist: ["strictLoginUsers"],
};

const persistedReducer = persistReducer(persistConfig, strictLoginUsersReducer);

const Store = configureStore({
  reducer: {
    strictLoginUsers: persistedReducer,
    cart:CartUpdate,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable check
    }),
});

const persistor = persistStore(Store);

export { Store, persistor };