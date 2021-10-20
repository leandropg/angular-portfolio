import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  infoPage: InfoPage = {};
  infoLoaded = false;

  constructor(public http: HttpClient) {

    this.http.get('assets/data/data-page.json')
      .subscribe((result: InfoPage) => {

        this.infoPage = result;
        this.infoLoaded = true;
      })
  }
}
