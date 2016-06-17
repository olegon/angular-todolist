var angular = require('angular');

var todoList = angular.module('todoList', []);

todoList.controller('TodoListController', require('./controllers/todoListController'));

todoList.directive('todoList', function () {
    return {
        templateUrl: 'templates/todo-list.html'
    };
});
