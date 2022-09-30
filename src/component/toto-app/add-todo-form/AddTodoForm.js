import React, { useRef } from "react";

const AddTodoForm = (props) => {

       const input = useRef("");
       function handleOnSubmit(e) {

              if (input.current !== "") {
                     props.onSubmit(input.current);
              }
              e.preventDefault()

       }
       function onChange(e) {
              input.current = e.target.value;
              e.preventDefault()
       }

       return (
              <form className="AddTodoForm" onSubmit={
                     handleOnSubmit
              }>
                     <input type="text" onChange={onChange} ></input>
                     <button type="submit" disabled={props.isLoading}>{(props.isLoading) ? "Loading" : "Create"}</button>
              </form>
       );
}

export default AddTodoForm;
