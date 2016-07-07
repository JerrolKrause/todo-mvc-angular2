import {bootstrap} 		from 'angular2/platform/browser';
import ToDoList 		from './todolist/todolist';
import {TodoStore} 		from './store/todostore';

bootstrap(ToDoList, [TodoStore]);
