import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

  private slidesStore = [
    {
      "name": 'Kuchnia',
      "amount": 0
    },
    {
      "name": 'Dom',
      "amount": 0
    },
    {
      "name": 'Rodzina',
      "amount": 0
    },
    {
      "name": 'Szkoła',
      "amount": 0
    },
    {
      "name": 'Biznes',
      "amount": 0
    },
    {
      "name": 'Garderoba',
      "amount": 0
    },
    {
      "name": 'Kurs 1000 podstawowych słowek a nawet więcej dla testu',
      "amount": 0
    },
  ];

  private activeSet;

  constructor() { }

  ngOnInit() {
    this.activeSet = this.slidesStore[0].name;
  }

  setActiveSet(clickedSet) {
    this.activeSet = clickedSet;
  }

}
