import getTodosByUserIdService from '../../services/todo/get_todos.service';
import addTodoService from '../../services/todo/post_todo.service';
import types from "../types/todo.type";

const getTodosByUserIdRequest = () => {
       return {
              type: types.GET_TODO_REQUEST,
       }
}

const getTodosByUserIdFullfilled = todos => {
       return {
              type: types.GET_TODO_FULLFILLED,
              payload: todos
       }
}

const getTodosByUserIdFailed = error => {
       return {
              type: types.GET_TODO_FAILED,
              payload: error
       }
}

const addTodoRequest = () => {
       return {
              type: types.ADD_TODO_REQUEST,
       }
}

const addTodoFullfilled = () => {
       return {
              type: types.ADD_TODO_FULLFILLED,
       }
}

const addTodoFailed = error => {
       return {
              type: types.ADD_TODO_FAILED,
              payload: error
       }
}

export const addTodo = (id, data) => {
       return function (dispatch) {
              dispatch(addTodoRequest());
              addTodoService(id, data).then((response) => {
                     dispatch(addTodoFullfilled());
                     dispatch(getTodosByUserId(id));

              }).catch((error) => {
                     dispatch(addTodoFailed(error));
              })

       }
}

export const getTodosByUserId = (id) => {
       return function (dispatch) {
              dispatch(getTodosByUserIdRequest());
              getTodosByUserIdService(id).then((todos) => {
                     dispatch(getTodosByUserIdFullfilled([...todos]));
              }).catch((error) => {
                     dispatch(getTodosByUserIdFailed(error));
              })

       }
}