import {Component,EventEmitter,Output} from 'angular2/core';

@Component({
    selector:"<todo-search-selector>",
    template:`<div><input type="text" #input (input)="update.emit(input.value)" /></div>
    `
})

export class TodoSearchSelector{
    @Output() update =new EventEmitter();

    ngOnInit(){
        this.update.emit('');
    }
}
