import * as fromTodo from './home.action';
import { User } from '../Model/User';

const user1 = new User("Jose", "Kauil");
const user2 = new User("Jorge", "Ay");

const estadoInicial: User[] = [user1, user2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): User[]{
    switch(action.type){

        case fromTodo.AGREGAR_TODO:
            const todo = new User(action._Name, action._Email);
            return [ ...state, todo];

        case fromTodo.TOOGLE_TODO:
            return state.map( todoEdit => {
                if(todoEdit.Id === action.iIdUser){
                    console.log(action.iIdUser)
                    return {
                        ...todoEdit,
                        Enable: !todoEdit.Enable
                    }
                }else{
                    return todoEdit;
                }
            });

        case fromTodo.EDIT_TODO:
            return state.map( todoEdit => {
                if(todoEdit.Id === action.iIdUser){
                    console.log(action.iIdUser)
                    return {
                        ...todoEdit,
                        Name: action._Name,
                        Email: action._Email
                        }
                        }else{
                            return todoEdit;
                        }
                    });

        case fromTodo.DELETE_TODO:
            console.log(action.iIdUser)
            return state.filter( todoEdit => todoEdit.Id != action.iIdUser);
        default:
            return state;
    }
}