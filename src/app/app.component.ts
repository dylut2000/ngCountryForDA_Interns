import { HttpService } from './services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  countries: any[];
  view: any;

  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
    this.http.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  viewMore(data) {
    console.log(data);
    this.view = data;
  }





}
