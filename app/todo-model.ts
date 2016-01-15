export class TodoModel {
    status:string;

    constructor(public title:string = '') {
    }

    toggle() {
        this.status =
            this.status === 'started'
                ? 'completed'
                : 'started'
    }


}
