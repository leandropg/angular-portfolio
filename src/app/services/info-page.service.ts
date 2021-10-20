import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  infoPage: any;
  infoLoaded = false;

  constructor(public http: HttpClient) {

    this.http.get('assets/data/data-page.json')
      .subscribe(result => {

        this.infoPage = result;
        this.infoLoaded = true;
      })
  }
}
