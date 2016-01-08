import {Component} from 'angular2/core';
import {TodoInput} from './todo-input.component';
import {TodoList} from './todo-list.component';

@Component({
    selector:'my-app',
    directives:[TodoInput,TodoList],
    template:`
              <h1>Todo List</h1>
              <todo-input></todo-input>
              <todo-list></todo-list>`
})

export class AppComponent{}