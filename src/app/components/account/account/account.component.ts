import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private userName: string;
  private name: string;
  private surname: string;

  private message: string = "";
  private messageError: string = "";

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    this.httpService.getUserInfo().subscribe(
      (response) => {
        this.userName = response.username;
        this.name = response.name;
        this.surname = response.surname;
      }
    )
  }

  saveChanges(newName: string, newSurname: string){
    this.httpService.updateUserInfo(newName, newSurname).subscribe(
      (response) => {
        if(response === 1){
          this.message = "Poprawnie zmieniono dane";
        }
      },
    (error) => {
        this.messageError = "Nie udało się zmienić danych";
      }
    );
  }
}
