import axios from 'axios';
import { registerOptions } from "../../repositories/auth.repository";

function register(data) {
       return new Promise((resolve, reject) => {
              axios(registerOptions(data)).then(function (response) {
                     resolve(response.data);
              }).catch(function (error) {
                     reject(error)
              });
       })
}


export default register;
