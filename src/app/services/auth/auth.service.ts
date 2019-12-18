import { Injectable } from '@angular/core';
import {UserDTO} from '../../models/UserDTO';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }

  login(login, password): Observable<JSON> {
    return this.httpService.loginUser(login, password)
  }

  register(user: UserDTO): Observable<UserDTO> {
    return this.httpService.registerUser(user);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }
}
