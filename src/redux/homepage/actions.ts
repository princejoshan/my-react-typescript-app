import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { HomePageProps } from './types';


export const getCardList: ActionCreatorWithPayload<HomePageProps> = createAction('homepage/getCardList');
export const search : ActionCreatorWithPayload<string> = createAction('homepage/search');
