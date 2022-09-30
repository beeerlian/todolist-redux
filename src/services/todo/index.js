const todoService = {};

todoService.getByUid = require('./get_todos.service');
todoService.postTodo = require('./post_todo.service');

export default todoService;