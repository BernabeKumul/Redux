import { Action } from '@ngrx/store';

export const SHOW_MODAL = '[SHOW] TOOGLE MODAL'

export class showModal implements Action{
    readonly type = SHOW_MODAL;

    constructor(public IdModal: string){}
}

export type acciones = showModal;