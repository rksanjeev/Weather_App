import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resp: any;
  URL: string;
  logourl: string;

  constructor( public http: HttpClient ) { }
  ngOnInit () { }

  onClickSubmit( value ) {
    this.URL = "http://api.openweathermap.org/data/2.5/weather?q=" + value.city + "," +  value.country + "&units=metric&APPID=a1c504188560dfa7537071c5af454419";
    console.log(this.URL);
     this.http.get(this.URL).subscribe( ( response ) => {
          this.resp = response;
           this.logourl = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '@2x.png';
          
    });
    
  


  }
}
