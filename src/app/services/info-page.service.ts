import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';
import { InfoTeam } from '../interfaces/info-team.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  infoPage: InfoPage = {};
  infoTeam: InfoTeam[] = [];
  infoLoaded = false;

  constructor(public http: HttpClient) {

    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {

    this.http.get('assets/data/data-page.json')
    .subscribe((result: InfoPage) => {

      this.infoPage = result;
      this.infoLoaded = true;
      //console.log(this.infoPage);
    })
  }

  private loadTeam() {

    this.http.get('https://angular-portfolio-5f8c0-default-rtdb.firebaseio.com/team.json')
    .subscribe((result: any) => {

      this.infoTeam = result;
    })
  }
}
