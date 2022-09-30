import axios from 'axios';

import { getTodoOptions } from '../../repositories/todo.repository';


function getTodosByUserId(id) {
       return new Promise((resolve, reject) => {
              axios(getTodoOptions(id)).then(function (response) {
                     resolve(response.data);
              }).catch(function (error) {
                     reject(error)
              });
       })
}

export default getTodosByUserId