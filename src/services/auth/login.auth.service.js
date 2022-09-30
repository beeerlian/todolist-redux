import axios from 'axios';
import { loginOptions } from "../../repositories/auth.repository";

export default login = (data) => {
       new Promise((resolve, reject) => {
              axios(loginOptions(data)).then(function (response) {
                     resolve(response.data);
              }).catch(function (error) {
                     reject(error)
              });
       })
}