import {Injectable} from 'angular2/core'
import {TodoModel} from "./todo-model";

@Injectable()
export class TodoService{
    todos:[TodoModel]=[
        new TodoModel('eat'),
        new TodoModel('code'),
        new TodoModel('sleep'),
    ];

    addTodo(todo){
        this.todos=[...this.todos,todo]
    }

    toggleTodo(todo:TodoModel){
        console.log(todo);
        todo.toggle();
        const todoIndex=this.todos.indexOf(todo);

        this.todos=[
            ...this.todos.slice(0,todoIndex),
            todo,
            ...this.todos.slice(todoIndex + 1)
        ];
    }
}
