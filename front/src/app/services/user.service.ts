import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;
  private urlGir = environment.urlGit;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = this.baseUrl + `/users`;

    return this.http.get<User[]>(url)
  }

  userById(id): Observable<User[]> {
    const url = this.baseUrl + `/users/${id}`;

    return this.http.get<User[]>(url).pipe(take(1));
  }

  createUsers(body): Observable<User[]> {
    const url = this.baseUrl + `/users`;

    return this.http.post<User[]>(url, body)
  }

  editUser(body): Observable<User[]> {
    const url = this.baseUrl + `/users/${body._id}`;

    return this.http.put<User[]>(url, body)
  }

  deletUser(body): Observable<User[]> {
    const url = this.baseUrl + `/users/${body}`;

    return this.http.delete<User[]>(url)
  }

  getUserGit(login): Observable<any> {
    const url = this.urlGir + `/users/${login}`;
    return this.http.get<any>(url)
  }
}
