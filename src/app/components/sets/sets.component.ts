import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {

  private sets;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getUserSets();
  }

  private getUserSets(){
    this.httpService.getUserSets().subscribe(
      (response) => {
        this.sets = response;
      }
    )
  }

  private deleteSet(setId) {
    this.httpService.deleteSet(setId).subscribe(
      (response) => this.getUserSets()
    );
  }

}
