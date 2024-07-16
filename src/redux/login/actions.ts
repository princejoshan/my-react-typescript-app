import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { LoginProps } from './types';


export const processLoginRequest: ActionCreatorWithPayload<LoginProps> = createAction('login/processLogin');
export const logout = createAction('login/logout');
