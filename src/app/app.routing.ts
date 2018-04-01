import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';

const APP_ROUTER:Routes = [

  {path: '', component: HomeComponent}
]

export const weatherRouting:ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);
