import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserDTO} from '../../models/UserDTO';
import {Observable} from 'rxjs';
import {SetDTO} from '../../models/SetDTO';
import {Word} from '../../models/Word';
import {DefaultSetDTO} from '../../models/DefaultSetDTO';
import {DefaultWordDTO} from '../../models/DefaultWordDTO';
import {SettingDTO} from '../../models/SettingDTO';

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

  updateUserInfo(newName: string, newSurname: string): Observable<number> {
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("userName",userName).set("newName",newName).set("newSurname",newSurname);
    return this.http.put<number>(this.serverAddress + '/api/user/updateUserInfo', {},{params: param});
  }

  addUserPoint(): Observable<number> {
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("userName",userName);
    return this.http.put<number>(this.serverAddress + '/api/user/addPoint',{}, {params: param});
  }

  addUserMiastake(): Observable<number> {
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("userName",userName);
    return this.http.put<number>(this.serverAddress + '/api/user/addMistake',{}, {params: param});
  }

  changePassword(password: string, newPassword: string): Observable<JSON> {
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("userName",userName).set("password",password).set("newPassword",newPassword);
    return this.http.put<JSON>(this.serverAddress + '/auth/changePassword', {}, {params: param});
  }

  getUserSets(): Observable<Array<SetDTO>> {
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("username",userName);
    return this.http.get<Array<SetDTO>>(this.serverAddress + '/api/set/getUserSets', {params: param});
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

  getWordsBySetId(id: string): Observable<Array<Word>>{
    let param = new HttpParams().set("setId",id);
    return this.http.get<Array<Word>>(this.serverAddress + '/api/word/getWordsBySetId?setId='+id, {params: param});
  }

  getDefaultSets(): Observable<DefaultSetDTO> {
    return this.http.get<DefaultSetDTO>(this.serverAddress + '/api/defaultSet/getAllDefaultSets');
  }

  getDefaultWordsBySetId(id: string): Observable<Array<DefaultWordDTO>>{
    let param = new HttpParams().set("setId",id);
    return this.http.get<Array<DefaultWordDTO>>(this.serverAddress + '/api/defaultWord/getDefaultWordsBySetId?setId='+id, {params: param});
  }

  copyDefaultSet(defaultSetId: string){
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("userName",userName).set("defaultSetId",defaultSetId);
    return this.http.get(this.serverAddress + '/api/defaultSet/copyDefaultSet', {params: param});
  }

  getUserSetting(): Observable<SettingDTO>{
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("userName",userName);
    return this.http.get<SettingDTO>(this.serverAddress + '/api/setting/getUserSetting', {params: param});
  }

  setUserSettingChangedOrder(setting: string): Observable<number>{
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("userName",userName).set("setting",setting);
    return this.http.put<number>(this.serverAddress + '/api/setting/setChangedOrder', {},{params: param});
  }

  setUserSettingCounter(setting: string): Observable<number>{
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("userName",userName).set("setting",setting);
    return this.http.put<number>(this.serverAddress + '/api/setting/setCounter', {},{params: param});
  }

  setUserSettingStyledFont(setting: string): Observable<number>{
    let userName = sessionStorage.getItem('username');
    let param = new HttpParams().set("userName",userName).set("setting",setting);
    return this.http.put<number>(this.serverAddress + '/api/setting/setStyledFont', {},{params: param});
  }
}
