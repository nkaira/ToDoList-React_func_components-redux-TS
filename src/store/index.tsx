import { createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { tasksReducer } from "./tasks/tasksReducer";
import { filterStatusReducer } from "./filter/filterReducer";

const reducer = combineReducers({ tasksReducer, filterStatusReducer });

export type Reducer = ReturnType<typeof reducer>

export const store = createStore(
    reducer,
    composeWithDevTools()
);

export type AppDispatch = typeof store.dispatch;


