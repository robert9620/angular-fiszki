import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {UserDTO} from '../../models/UserDTO';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private points;
  private mistakes;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getUserInfo().subscribe(
      (response) => {
        console.log(response);
        this.mistakes = response.mistakes;
        this.points = response.points;
      }
    );
  }

}
