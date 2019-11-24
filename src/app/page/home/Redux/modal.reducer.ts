import * as modalAction from 'src/app/page/home/Redux/modal.action';
import { modal } from '../../Model/Modal';

const modal1 = new modal('AGREGAR');
const modal2 = new modal('EDITAR');
const modal3 = new modal('VISUALIZAR');

const showModal: modal[] = [modal1, modal2, modal3];

export function modalReducer(state = showModal, action: modalAction.acciones):
    modal[] {
    switch (action.type ) {
        case modalAction.SHOW_MODAL:
            return state.map(toggleModal => {
                if(toggleModal.Id === action.IdModal){
                    return {
                        ...toggleModal,
                        isVisible: !toggleModal.isVisible
                    }
                }else{
                   return toggleModal
                }
            });
        default:
            return state;
    }
}