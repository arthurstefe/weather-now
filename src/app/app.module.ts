import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { weatherRouting } from './app.routing';
import { WeatherService } from './services/weather.service';
import { CacheService } from './services/cache.service';
import { DividerComponent } from './components/divider/divider.component';
import { LoaderComponent } from './components/loader/loader.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DividerComponent,
    LoaderComponent,
    WeatherCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    weatherRouting,
    ReactiveFormsModule
  ],
  providers: [ WeatherService, CacheService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
