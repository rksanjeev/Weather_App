import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resp: any;
  logourl: string;

  constructor( private weatherservice:WeatherService  ) { }
  ngOnInit () { }

  onClickSubmit( value ) {
    this.weatherservice.getWeather(value).subscribe( ( response ) => {
          this.resp = response;
           this.logourl = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '@2x.png';
          
    });
    
  


  }
}
