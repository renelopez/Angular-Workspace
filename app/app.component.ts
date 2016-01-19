import {Component,Input} from 'angular2/core';
import {TodoInput} from './todo-input.component';
import {TodoList} from './todo-list.component';
import {TodoStatusSelector} from './todo-status-selector.component'

@Component({
    selector:'my-app',
    directives:[TodoInput,TodoList,TodoStatusSelector],
    template:`
              <h1>Todo List</h1>
              <todo-input></todo-input>
              <todo-status-selector (select)="status = $event"></todo-status-selector>
              <todo-list [status]="status"></todo-list>`
})

export class AppComponent{

}