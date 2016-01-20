import {Component,Input} from 'angular2/core';
import {TodoInput} from './todo-input.component';
import {TodoList} from './todo-list.component';
import {TodoStatusSelector} from './todo-status-selector.component'
import {TodoSearchSelector} from './todo-search-selector.component'

@Component({
    selector:'my-app',
    directives:[TodoInput,TodoList,TodoStatusSelector,TodoSearchSelector],
    template:`
              <h1>Todo List</h1>
              <todo-search-selector (update)="term = $event"></todo-search-selector>
              <todo-input></todo-input>
              <todo-status-selector (select)="status = $event"></todo-status-selector>
              <todo-list [status]="status" [term]="term"></todo-list>`
})

export class AppComponent{

}