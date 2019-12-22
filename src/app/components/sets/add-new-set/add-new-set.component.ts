import { Component, OnInit } from '@angular/core';
import {Word} from '../../../models/Word';
import {HttpService} from '../../../services/http/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-set',
  templateUrl: './add-new-set.component.html',
  styleUrls: ['./add-new-set.component.css']
})
export class AddNewSetComponent implements OnInit {
  private words: Array<Word>;
  private setName: string;

  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.words = new Array<Word>();
    this.words.push(new Word("",""));
    this.setName = '';
  }

  addWord() {
    this.words.push(new Word("",""));
  }

  deleteWord(id) {
    this.words.splice(id, 1);
  }

  saveWords() {
    this.httpService.createSet(this.setName).subscribe(
      (response) => {
        this.words.forEach(function(word){
          word.setId = response.id;
        })

        this.httpService.createWords(this.words).subscribe(
          () => this.router.navigate(['/zestawy'])
        );
      }
    );

  }

}
