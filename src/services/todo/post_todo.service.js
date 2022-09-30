import axios from 'axios';
import { postTodoOptions } from '../../repositories/todo.repository';


function postTodoService(id, data) {
       return new Promise((resolve, reject) => {
              axios(postTodoOptions(id, data)).then(function (response) {
                     resolve(response.data);
              }).catch(function (error) {
                     reject(error)
              });
       })
}

export default postTodoService