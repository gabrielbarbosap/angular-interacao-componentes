import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
    providedIn: 'root'
})
export class UserSubService {

    constructor() { }

    // Observable string sources
    private newuser = new Subject<User>();
    private detail = new Subject<string>();

    // Observable string streams
    newuser$ = this.newuser.asObservable();
    detail$ = this.detail.asObservable();

    // Service message commands
    newUser(tarefa) {
        this.newuser.next(tarefa);
    }

    Userdetail(tarefa) {
        this.detail.next(tarefa);
    }
}