import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserDTO} from '../../models/UserDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverAddress = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  loginUser(login, password): Observable<JSON> {
    const user = new UserDTO(login, password);
    return this.http.post<JSON>(this.serverAddress + '/auth/login', user);
  }

  registerUser(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.serverAddress + '/auth/register', user);
  }

  checkLogin(): Observable<string> {
    return this.http.get(this.serverAddress + '/api/hello', { responseType: 'text'});
  }
}
