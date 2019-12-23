import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-find-set',
  templateUrl: './find-set.component.html',
  styleUrls: ['./find-set.component.css']
})
export class FindSetComponent implements OnInit {

  private defaultSets;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getDefaultSets();
  }

  private getDefaultSets(){
    this.httpService.getDefaultSets().subscribe(
      (response) => {
        this.defaultSets = response;
        this.defaultSets.sort();
      }
    )
  }

  private addToSets(defaultSetId, plusIcon, tile) {
    this.httpService.copyDefaultSet(defaultSetId).subscribe();
    plusIcon.style.display = "none";
    tile.style.borderColor = "green";
  }

}
