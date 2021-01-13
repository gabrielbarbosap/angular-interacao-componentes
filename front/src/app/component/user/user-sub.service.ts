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

    // Observable string streams
    newuser$ = this.newuser.asObservable();

    // Service message commands
    newUser(tarefa) {
        this.newuser.next(tarefa);
    }
}