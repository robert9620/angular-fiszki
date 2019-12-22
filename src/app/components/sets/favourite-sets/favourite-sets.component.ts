import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-favourite-sets',
  templateUrl: './favourite-sets.component.html',
  styleUrls: ['./favourite-sets.component.css']
})
export class FavouriteSetsComponent implements OnInit {

  private sets;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getUserFavouriteSets();
  }

  private getUserFavouriteSets(){
    this.httpService.getUserFavouriteSets().subscribe(
      (response) => {
        this.sets = response;
      }
    )
  }

  private deleteSet(setId){
    this.httpService.deleteSet(setId).subscribe(
      (response) => this.getUserFavouriteSets()
    );
  }

  private deleteSetFromFavourite(setId){
    this.httpService.deleteSetFromFavourite(setId).subscribe(
      (response) => this.getUserFavouriteSets()
    )
  }

}
