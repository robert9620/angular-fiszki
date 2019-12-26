import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http.service';
import {Router} from '@angular/router';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {SetDTO} from '../../../models/SetDTO';
import {Word} from '../../../models/Word';
import {SettingDTO} from '../../../models/SettingDTO';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  owlCarouselOptions: OwlOptions = {
    loop:false,
    center: true,
    touchDrag  : false,
    mouseDrag  : false,
    dots: false,
    items:1
  };

  private fichesStore: Array<Word>;

  private setId: string;

  private points: number;
  private mistakes: number;

  private isEnd: boolean;

  private settings: SettingDTO = new SettingDTO();

  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.points = 0;
    this.mistakes = 0;
    this.initSettings();
    this.initFiches();
  }

  initSettings() {
    this.httpService.getUserSetting().subscribe(
      (response) => {
        this.settings = response;
      }
    )
  }

  initFiches() {
    this.setId = sessionStorage.getItem('currentLearningSetId');
    this.httpService.getWordsBySetId(this.setId).subscribe(
      (response) => {
        if(response.length === 0) {
          this.isEnd = true;
        } else {
          this.isEnd = false;
        }

        this.fichesStore = response.sort(() => Math.random() - 0.5);

        if(this.settings.changedOrder){
          this.fichesStore.forEach(function(fiche) {
            fiche.flipped = false;
          })
        } else {
          this.fichesStore.forEach(function(fiche) {
            fiche.flipped = true;
          })
        }
      }
    )
  }

  goToHomePage(){
    this.router.navigate(['biurko']);
  }

  toggleClass(index) {
    if(this.fichesStore[index].flipped) {
      this.fichesStore[index].flipped = false;
    } else {
      this.fichesStore[index].flipped = true;
    }
  }

  mistake(owlCarousel) {
    if(this.settings.counter) {
      this.mistakes++;
      this.httpService.addUserMiastake().subscribe();
    }
    if(this.mistakes + this.points < (this.fichesStore.length)) {
      owlCarousel.next();
    } else {
      this.isEnd = true;
    }
  }

  point(owlCarousel) {
    if(this.settings.counter) {
      this.points++;
      this.httpService.addUserPoint().subscribe();
    }
    if(this.mistakes + this.points < this.fichesStore.length) {
      owlCarousel.next();
    } else {
      this.isEnd = true;
    }
  }

  next(owlCarousel){
    this.points++;
    owlCarousel.next();
    if(this.points >= (this.fichesStore.length - 1)) {
      this.isEnd = true;
    }
  }
}
