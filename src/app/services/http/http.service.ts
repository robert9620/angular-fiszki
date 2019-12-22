import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserDTO} from '../../models/UserDTO';
import {Observable} from 'rxjs';
import {SetDTO} from '../../models/SetDTO';
import {Word} from '../../models/Word';

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
    return this.http.get<UserDTO>(this.serverAddress + '/api/user/getUserInfo', {params: param});
  }

  getUserSets(): Observable<SetDTO> {
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("username",userName);
    return this.http.get<SetDTO>(this.serverAddress + '/api/set/getUserSets', {params: param});
  }

  deleteSet(id) {
    let param = new HttpParams().set("setId",id);
    return this.http.delete(this.serverAddress + '/api/set/deleteUserSet', {params: param});
  }

  getUserFavouriteSets(): Observable<SetDTO> {
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("username",userName);
    return this.http.get<SetDTO>(this.serverAddress + '/api/set/getUserFavouriteSets', {params: param});
  }

  addSetToFavourite(id: string) {
    let param = new HttpParams().set("setId",id);
    return this.http.put(this.serverAddress + '/api/set/addSetToFavourite?setId='+id, {params: param});
  }

  deleteSetFromFavourite(id: string) {
    let param = new HttpParams().set("setId",id);
    return this.http.put(this.serverAddress + '/api/set/deleteSetFromFavourite?setId='+id,{params: param});
  }

  createSet(setName: String) {
    let userName = sessionStorage.getItem('username');
    return this.http.post<SetDTO>(this.serverAddress + '/api/set/createSet', {name: setName, user: userName});
  }

  createWords(words: Array<Word>){
    return this.http.post<Array<Word>>(this.serverAddress + '/api/word/createWords', words);
  }

  getWordsBySetId(id: string){
    let param = new HttpParams().set("setId",id);
    return this.http.get(this.serverAddress + '/api/word/getWordsBySetId?setId='+id, {params: param});
  }
}
