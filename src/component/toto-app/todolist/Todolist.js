import React from "react"

import "./Todolist.css"

const Todolist = (props) => {
       return (
              <div className="Todolist">
                     <ul>
                            {
                                   props.todos.map((todo) => {
                                          return (<li>
                                                 <p className=  {"todo " +(todo.completed ? 'completed' : 'uncompleted')}>{todo.title}</p>

                                          </li>)
                                   })
                            }
                     </ul>
              </div>
       )
}

export default Todolist