import {Component,Input} from 'angular2/core'
import {TodoService} from "./todo-service";
import {TodoItemRenderer} from "./todo-item-renderer";
import {StartedPipe} from "./started-pipe";


@Component({
    selector:'todo-list',
    directives:[TodoItemRenderer],
    pipes:[StartedPipe],
    template:`<ul>
                <li *ngFor="#todo of todoService.todos | started:status">
                    <todo-item-renderer
                    (toggle)="todoService.toggleTodo($event)"
                    [todo]="todo"></todo-item-renderer>
                </li>
             </ul>`
})

export class TodoList{
  @Input() status;
  constructor(public todoService:TodoService){

  }
}