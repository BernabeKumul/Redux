
export type optionModal = 'AGREGAR' | 'EDITAR' | 'VISUALIZAR';

export class modal {
    public Id: string;
    public isVisible: boolean;

    constructor(_Id: string){ // importante no colocar de tipo public
        this.Id = _Id,
        this.isVisible = false
    }
}