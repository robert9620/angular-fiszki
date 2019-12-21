import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {UserDTO} from '../../models/UserDTO';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {SetDTO} from '../../models/SetDTO';

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

  getUserInfo(): Observable<UserDTO> {
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("username",userName);
    return this.http.get<UserDTO>(this.serverAddress + '/api/userInfo', {params: param});
  }

  getUserSets(): Observable<SetDTO> {
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("username",userName);
    return this.http.get<SetDTO>(this.serverAddress + '/api/userSets', {params: param});
  }

  deleteSet(id) {
    let param = new HttpParams().set("setId",id);
    return this.http.delete(this.serverAddress + '/api/deleteUserSet', {params: param});
  }

  checkLogin(): Observable<string> {
    return this.http.get(this.serverAddress + '/api/hello', { responseType: 'text'});
  }
}
