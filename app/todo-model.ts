export class TodoModel {

    constructor(public title:string = '',public status='started') {
    }

    toggle() {
        this.status =
            this.status === 'started'
                ? 'completed'
                : 'started'
    }


}
