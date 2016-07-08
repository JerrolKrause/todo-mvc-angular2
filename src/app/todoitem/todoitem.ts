import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ToDoItem as ToDoItemModel} from './../store/todostore';
import {ChangeDetectionStrategy} from 'angular2/core';

@Component({
  	selector: 'todo-item',
  	templateUrl: 'app/todoitem/todoitem.html',
  	styleUrls: ['app/todoitem/todoitem.css'],
  	changeDetection: ChangeDetectionStrategy.OnPush
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