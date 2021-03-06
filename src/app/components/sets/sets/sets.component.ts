import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {

  private sets;

  constructor(private router: Router,
              private httpService: HttpService) { }

  ngOnInit() {
    this.getUserSets();
  }

  private getUserSets(){
    this.httpService.getUserSets().subscribe(
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

  private deleteSet(setId) {
    this.httpService.deleteSet(setId).subscribe(
      (response) => this.getUserSets()
    );
  }

  private deleteSetFromFavourite(setId){
    this.httpService.deleteSetFromFavourite(setId).subscribe(
      (response) => this.getUserSets()
    )
  }

  private addSetToFavourite(setId){
    this.httpService.addSetToFavourite(setId).subscribe(
      (response) => this.getUserSets()
    )
  }

}
