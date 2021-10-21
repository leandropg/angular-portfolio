import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPageService: InfoPageService, private router: Router) { }

  ngOnInit(): void {
  }

  loadProduct(searchValue: string) {

    if(searchValue.length < 1) {

      return;
    }
    this.router.navigate(['/search', searchValue])
  }
}
