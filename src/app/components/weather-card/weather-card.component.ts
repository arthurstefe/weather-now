import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { LoaderComponent } from '../loader/loader.component';
import { CityWeather } from '../../models/city-weather';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input() cardTitle: string
  @Output() onLoadWeather: EventEmitter <CityWeather> = new EventEmitter();
  @ViewChild('loader') loader: LoaderComponent;
  
  public cityWeather: CityWeather;
  public showError: boolean = false; 

  constructor(private ws:WeatherService) { }

  ngOnInit() {
  }

  public loadWeather(city:string):void{
    this.resetVariables();
    this.loader.show();
    setTimeout(() => {
      this.ws.getCityWeather(city).subscribe(
        (weatherData) => {
          this.showError = false;
          this.cityWeather = new CityWeather(weatherData);
          this.onLoadWeather.emit(this.cityWeather);
          this.loader.close();
        },
        (error) => {
          this.loader.close();
          this.showError = true;
        }
      )
    }, 500);
  }

  resetVariables():void {
    this.showError = false;
    this.cityWeather = null;
  }

}
