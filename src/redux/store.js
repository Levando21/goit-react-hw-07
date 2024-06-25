/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filters: filtersReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export default { store };
