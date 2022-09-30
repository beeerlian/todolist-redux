import statusType from '../types/status.type';
import types from "../types/todo.type";

const initialState = {
       todos: [],
       getTodoStatus: statusType.INITIAL,
       addTodoStatus: statusType.INITIAL,
       getTodoErrorMessage: '',
       addTodoErrorMessage: '',
};

export default function reducers(state = initialState, action) {
       switch (action.type) {
              case types.ADD_TODO_REQUEST:
                     return {
                            ...state,
                            addTodoStatus: statusType.LOADING,

                     };
              case types.ADD_TODO_FULLFILLED:
                     return {
                            ...state,
                            addTodoStatus: statusType.SUCCESS,
                     };
              case types.ADD_TODO_FAILED:
                     return {
                            ...state,
                            addTodoStatus: statusType.FAILED,
                            addTodoErrorMessage: action.payload,
                     };
              case types.GET_TODO_REQUEST:
                     return {
                            ...state,
                            getTodoStatus: statusType.LOADING,
                     };
              case types.GET_TODO_FULLFILLED:

                     return {
                            ...state,
                            todos: action.payload,
                            getTodoStatus: statusType.SUCCESS,
                     };
              case types.GET_TODO_FAILED:
                     return {
                            ...state,
                            getTodoStatus: statusType.FAILED,
                            getTodoErrorMessage: action.payload,
                     };
              default:
                     return state;
       }

}

