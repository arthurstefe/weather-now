import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { WeatherCardComponent } from '../components/weather-card/weather-card.component';
import { CityWeather } from '../models/city-weather';
import { CacheService } from '../services/cache.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('nuukCard') nuukCard: WeatherCardComponent;
  @ViewChild('urubiciCard') urubiciCard: WeatherCardComponent;
  @ViewChild('nairobiCard') nairobiCard: WeatherCardComponent;

  constructor(private cacheService: CacheService) { }

  ngOnInit() {
    this.loadWeather(false);
    this.launchWeatherUpdater();
  }

  
  private launchWeatherUpdater():void{
    Observable.interval(10000 * 60).subscribe(x => {
      this.loadWeather(true);
    });
  }

  private loadWeather(update?:boolean):void {
    if(!update) {
      !this.cacheService.get('nuuk') ? 
        this.nuukCard.loadWeather('nuuk') : 
        this.nuukCard.cityWeather = this.cacheService.get('nuuk');
      !this.cacheService.get('urubici') ? 
        this.urubiciCard.loadWeather('urubici') : 
        this.urubiciCard.cityWeather = this.cacheService.get('urubici');
      !this.cacheService.get('nairobi') ? 
        this.nairobiCard.loadWeather('nairobi') : 
        this.nairobiCard.cityWeather = this.cacheService.get('nairobi');
    } else {
      this.nuukCard.loadWeather('nuuk');
      this.urubiciCard.loadWeather('urubici');
      this.nairobiCard.loadWeather('nairobi');
    }
  }
  
  public onLoadWeather(weather: CityWeather, city: string):void {
    this.cacheService.set(city, weather);
  }

}
