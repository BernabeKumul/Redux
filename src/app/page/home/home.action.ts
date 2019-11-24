import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] AGREGAR TODO';
export const TOOGLE_TODO = '[TODO] CAMBIAR STATUS';
export const EDIT_TODO = '[TODO] EDITAR INFORMATION';
export const DELETE_TODO = '[TODO] ELIMINAR INFORMATION';

export class AgregarTodo implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public _Name: string, public _Email: string) { } //Es importante colocar publico los parametros
}

export class ToogleTodo implements Action {
    readonly type = TOOGLE_TODO;

    constructor(public iIdUser: number) { } //Es importante colocar publico los parametros
}

export class EditInformation implements Action {
    readonly type = EDIT_TODO;

    constructor(public iIdUser: number, public _Name: string, public _Email: string) { } //Es importante colocar publico los parametros
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;

    constructor(public iIdUser: number) { } //Es importante colocar publico los parametros
}



export type Acciones = AgregarTodo
    | ToogleTodo
    | EditInformation
    | DeleteTodo;