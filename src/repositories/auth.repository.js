

function registerOptions(data) {
       return {
              method: 'POST',
              url: 'https://api-nodejs-todolist.herokuapp.com/user/register',
              headers: {
                     'Content-Type': 'application/json'
              },
              data: JSON.stringify(data)
       }

};

function loginOptions(data) {
       return {
              'method': 'POST',
              'url': 'https://api-nodejs-todolist.herokuapp.com/user/login',
              'headers': {
                     'Content-Type': 'application/json'
              },
              data: JSON.stringify(data)
       }

};



export { registerOptions, loginOptions }
