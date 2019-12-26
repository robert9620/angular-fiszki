import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {HttpService} from '../../services/http/http.service';
import {SetDTO} from '../../models/SetDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lets-learn',
  templateUrl: './lets-learn.component.html',
  styleUrls: ['./lets-learn.component.css']
})
export class LetsLearnComponent implements OnInit {

  owlCarouselOptions: OwlOptions = {
    loop:false,
    center: true,
    items:1,
    dots: false,
    responsive:{
      992:{
        items:3
      },
      768:{
        items:2
      }
    }
  };

  private slidesStore: Array<SetDTO>;

  private activeSet;
  private activeSetId: string;

  private setting: Setting = new Setting();

  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.initSetAndSetting();
  }

  initSetAndSetting() {
    this.httpService.getUserSets().subscribe(
      (response) => {
        if(response.length > 0) {
          this.slidesStore = response;
          this.slidesStore.sort();
          this.activeSet = response[0].name;
          this.activeSetId = response[0].id;
        } else {
          this.router.navigate(['zestawy/moje-zestawy']);
        }
      }
    )
    this.httpService.getUserSetting().subscribe(
      (response) => {
        this.setting.changedOrder = response.changedOrder;
        this.setting.counter = response.counter;
        this.setting.styledFont = response.styledFont;
      }
    )
  }

  setActiveSet(clickedSet, activeSetId: string) {
    this.activeSet = clickedSet;
    this.activeSetId = activeSetId;
  }

  updateChangedFont(value: boolean) {
    this.httpService.setUserSettingChangedOrder(String(value)).subscribe();
  }

  updateCounter(value: boolean) {
    this.httpService.setUserSettingCounter(String(value)).subscribe();
  }

  updateStyledFont(value: boolean) {
    this.httpService.setUserSettingStyledFont(String(value)).subscribe();
  }

  goToLearnPage() {
    sessionStorage.setItem('currentLearningSetId', this.activeSetId);
    this.router.navigate(['pouczymy-sie/nauka']);
  }

}

class Setting{
  changedOrder: boolean;
  counter: boolean;
  styledFont: boolean;

  constructor(changedOrder?: boolean, counter?: boolean, styledFont?: boolean) {
    this.changedOrder = changedOrder;
    this.counter = counter;
    this.styledFont = styledFont;
  }
}
