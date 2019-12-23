import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private name: string;
  private points;
  private mistakes;
  private setsAmount;
  private wordsAmount;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getInformations();
  }

  getInformations(){
    this.httpService.getUserInfo().subscribe(
      (response) => {
        this.name = response.name;
        this.mistakes = response.mistakes;
        this.points = response.points;
      }
    );

    this.httpService.getUserSets().subscribe(
      (response) => {
        this.setsAmount = response.length;
        this.wordsAmount = 0;
        for(let i = 0; i<response.length; i++){
          this.wordsAmount += response[i].wordsAmount;
        }
      }
    )
  }

}
