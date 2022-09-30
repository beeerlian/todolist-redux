const repo = {};

repo.auth = require('./auth.repository')
repo.todo = require('./todo.repository')

exports = repo;