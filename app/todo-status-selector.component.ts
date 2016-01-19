import {Component,EventEmitter,Output} from 'angular2/core';

@Component({
    selector:"<todo-status-selector>",
    template:`<select #item (change)="select.emit(item.value)">
                <option *ngFor="#status of statuses">{{status}}</option>
              </select>
    `
})

export class TodoStatusSelector{
    @Output() select =new EventEmitter();
    statuses=['started','completed'];

    ngInit(){
        this.select.emit(this.statuses[0]);
    }
}
