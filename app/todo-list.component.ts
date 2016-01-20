import {Component,Input} from 'angular2/core'
import {TodoService} from "./todo-service";
import {TodoItemRenderer} from "./todo-item-renderer";
import {StartedPipe} from "./started-pipe";
import {SearchPipe} from "./search-pipe";
import {Output} from "angular2/core";


@Component({
    selector:'todo-list',
    directives:[TodoItemRenderer],
    pipes:[StartedPipe,SearchPipe],
    template:`<ul>
                <li *ngFor="#todo of todoService.todos
                 | started:status
                 | search:term">
                    <todo-item-renderer
                    (toggle)="todoService.toggleTodo($event)"
                    [todo]="todo"></todo-item-renderer>
                </li>
             </ul>`
})

export class TodoList{
  @Input() status;
  @Input() term;
  constructor(public todoService:TodoService){

  }
}