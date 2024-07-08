import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { QueryEntry } from "./types";


export const addQueryEntry: ActionCreatorWithPayload<QueryEntry> = createAction('query/addQuery');
export const filterQueryEntry: ActionCreatorWithPayload<string> = createAction('query/filterQuery');
export const setSearchQuery: ActionCreatorWithPayload<string> = createAction('query/setSearchQuery');
