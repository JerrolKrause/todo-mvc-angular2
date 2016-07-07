import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ToDoItem as ToDoItemModel} from './../store/todostore';

@Component({
  	selector: 'todo-item',
  	templateUrl: 'app/todoitem/todoitem.html',
  	styleUrls: ['app/todoitem/todoitem.css']
})


export default class ToDoItem {
 	@Input()
 	item: ToDoItemModel;

 	@Output()
 	done = new EventEmitter();

 	doneClicked(){
 		this.done.next(this.item);
 	}

}

