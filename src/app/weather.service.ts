import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URL:string;
  constructor(public http: HttpClient ) { }

  getWeather(value){
    this.URL = "http://api.openweathermap.org/data/2.5/weather?q=" + value.city + "," +  value.country + "&units=metric&APPID=a1c504188560dfa7537071c5af454419";
    console.log(this.URL);
     return this.http.get(this.URL);

  }
}
