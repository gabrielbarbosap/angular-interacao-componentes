import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserResolverGuard implements Resolve<User[]> {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, ): Observable<User[]> {
    const userId = route.params.id;


    return this.userService.userById(route.params.id).pipe(
      map(res => {
        if (res) {
          return res;
        } else {
          this.router.navigate(['']);
          return null;
        }
      }),
      catchError(() => {
        this.router.navigate(['']);
        return of(null);
      })
    );
  }

}
