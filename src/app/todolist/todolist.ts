import {Component} from 'angular2/core';
import {TodoStore} from './../store/todostore';
import ToDoItem from '../todoitem/todoitem';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todolist/todolist.html',
  styleUrls: ['app/todolist/todolist.css'],
  directives: [ToDoItem]
})


export default class ToDoList {
 	newItem = 'test 123';
 	store 	: TodoStore;

 	constructor(store: TodoStore){
 		this.store = store;
 	}

 	addItem(){
 		this.store.addItem(this.newItem);
 		this.newItem = '';
 	}

 	removeItem(item: TodoModelItem) {
	    this.store.removeItem(item);
	}

}

