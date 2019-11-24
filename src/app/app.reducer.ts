import { User } from './page/Model/User';
import { ActionReducerMap } from '@ngrx/store';

import * as userReducer from 'src/app/page/home/home.reducer';
import * as modalReducer from 'src/app/page/home/Redux/modal.reducer';
import { modal } from './page/Model/Modal';

export interface AppState {
    user: User[];
    modal: modal[];
}

export const appReducer: ActionReducerMap<AppState> = {
    user: userReducer.todoReducer,
    modal: modalReducer.modalReducer
}