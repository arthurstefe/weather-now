import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  apiId = "0f3fb9fa31ad3d41f1bb2bd0841c3f2f";

  constructor(private http:Http) { }

  getCityWeather(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=${this.apiId}&q=${city}&units=metric&cnt=10`)
    .map((response:Response) => response.json());
  }

}
