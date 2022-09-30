import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodosByUserId } from "../../../redux/actions/todo.action";
import statusType from "../../../redux/types/status.type";
import AddTodoForm from "../add-todo-form/AddTodoForm";
import Todolist from "../todolist/Todolist";

const Todo = () => {

       const getTodosStatus = useSelector((state) => state.todo.getTodoStatus)
       const todos = useSelector((state) => state.todo.todos)
       const getTodosErrMsg = useSelector((state) => state.todo.getTodoErrorMessage)

       const dispatch = useDispatch();

       function handleOnSubmit(title) {
              const data = {
                     userId: 2,
                     title: title,
                     completed: false
              };

              dispatch(addTodo(2, data));

       }
       function getTodos() {
              dispatch(getTodosByUserId(2));
       }

       useEffect(() => {
              dispatch(getTodosByUserId(2));
       }, [])



       if (getTodosStatus === statusType.LOADING) {
              return (<LoadingView />);
       }
       else if (getTodosStatus === statusType.SUCCESS) {
              return (
                     <TodosView handleOnSubmit={handleOnSubmit} todos={todos} />
              );
       } else {
              return (<FailedView message={getTodosErrMsg} onRefresh={getTodos} />);
       }

}

const TodosView = (props) => {
       const addTodosStatus = useSelector((state) => state.todo.addTodoStatus)
       const addTodosErrMsg = useSelector((state) => state.todo.addTodoErrorMessage)



       return (
              <div>
                     {(addTodosStatus === statusType.FAILED) ? (<p> {addTodosErrMsg}</p>) : (<div></div>)}
                     <AddTodoForm onSubmit={props.handleOnSubmit} isLoading={(addTodosStatus === statusType.LOADING)} />
                     <Todolist todos={props.todos} />
              </div>

       )
}

const LoadingView = () => {
       return (
              <div>
                     <h1>Loading</h1>
              </div>

       )
}

const FailedView = (props) => {
       return (
              <div>
                     <h4>{props.message}</h4>
                     <button onClick={props.onRefresh}>Refresh</button>
              </div>

       )
}


export default Todo