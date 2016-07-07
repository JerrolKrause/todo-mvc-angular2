export class ToDoItem{
	text: String;
}

export class TodoStore{
	items: ToDoItem[];

	constructor(){
		this.items = [];
	}


	addItem(newItem: String){
		this.items.push({
			text: newItem
		});
	}

	removeItem(item: ToDoItem){
		const index = this.items.indexOf(item);
		this.items.splice(index,1);
	}

}