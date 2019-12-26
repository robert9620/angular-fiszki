import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favourite-sets',
  templateUrl: './favourite-sets.component.html',
  styleUrls: ['./favourite-sets.component.css']
})
export class FavouriteSetsComponent implements OnInit {

  private sets;

  constructor(private router: Router,
              private httpService: HttpService) { }

  ngOnInit() {
    this.getUserFavouriteSets();
  }

  private getUserFavouriteSets(){
    this.httpService.getUserFavouriteSets().subscribe(
      (response) => {
        this.sets = response;
        this.sets.sort();
      }
    )
  }

  private goLearn(setId) {
    sessionStorage.setItem('currentLearningSetId', setId);
    this.router.navigate(['pouczymy-sie/nauka']);
  }

  private editSet(setId, setName, isFavourite) {
    sessionStorage.setItem('currentEditingSetId', setId);
    sessionStorage.setItem('currentEditingSetName', setName);
    sessionStorage.setItem('currentEditingSetIsFavourite', isFavourite);
    this.router.navigate(['/zestawy/moje-zestawy/edycja']);
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
