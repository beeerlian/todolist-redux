

function getTodoOptions(id) {
       return {
              'method': 'GET',
              'url': `https://jsonplaceholder.typicode.com/users/${id}/todos/`,
              'headers': {
                     'Content-Type': 'application/json'
              },

       }

};

function postTodoOptions(id, data) {
       return {
              'method': 'POST',
              'url': `https://jsonplaceholder.typicode.com/users/${id}/todos/`,
              'headers': {
                     'Content-Type': 'application/json'
              },
              data: data

       }

};


export { getTodoOptions, postTodoOptions }

