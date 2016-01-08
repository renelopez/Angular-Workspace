import {Component} from 'angular2/core'
import {TodoService} from './todo-service'

@Component({
    selector:'todo-input',
    template:`
            <div>
                <input type="text" [(ngModel)]="todoInput">
                <button (click)="onSubmit()">Submit</button>
                {{todoInput}}
            </div>`
})

export class TodoInput{

    todoInput;

    constructor(public todoService:TodoService){
    }

    onSubmit(){
        this.todoService.todos.push(this.todoInput);
        console.log(this.todoService.todos);
    }
}