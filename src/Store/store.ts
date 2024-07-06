import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
//Define the persistconfig
const persistConfig = {
  key: "root",
  storage,
};

//combine reducer
const rootReducer = combineReducers({
  todo: TodoReducer,
});

//create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//configure the store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

//create the persistor
export const persistor = persistStore(store);
