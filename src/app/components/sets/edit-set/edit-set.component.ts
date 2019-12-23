import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {Word} from '../../../models/Word';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-set',
  templateUrl: './edit-set.component.html',
  styleUrls: ['./edit-set.component.css']
})
export class EditSetComponent implements OnInit {
  private setId;
  private setName;
  private setIsFavourite;
  private words;

  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.setId = sessionStorage.getItem('currentEditingSetId');
    this.setName = sessionStorage.getItem('currentEditingSetName');
    this.setIsFavourite = sessionStorage.getItem('currentEditingSetIsFavourite');
    this.httpService.getWordsBySetId(this.setId).subscribe(
      (response) => {
        this.words = response;
      }
    )
  }

  addWord() {
    this.words.push(new Word("",""));
  }

  deleteWord(id) {
    this.words.splice(id, 1);
  }

  save() {
    sessionStorage.removeItem('currentEditingSetId');
    sessionStorage.removeItem('currentEditingSetName');
    sessionStorage.removeItem('currentEditingSetIsFavourite');
    this.deleteEditedSet();
    this.createNewSet();
  }

  deleteEditedSet(){
    this.httpService.deleteSet(this.setId).subscribe();
  }

  createNewSet(){
    this.httpService.createSet(this.setName).subscribe(
      (response) => {
        this.words.forEach(function(word){
          word.setId = response.id;
        });

        console.log(this.setIsFavourite);
        if( this.setIsFavourite === "true") {
          console.log('set as favourite');
          this.httpService.addSetToFavourite(response.id).subscribe();
        }

        this.httpService.createWords(this.words).subscribe(
          () => this.router.navigate(['/zestawy'])
        );
      }
    );
  }

}
