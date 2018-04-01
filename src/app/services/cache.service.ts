import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {


  constructor() { }

  public set(name:string, value:any):void {
    const item = JSON.stringify(value);
    localStorage.setItem(name, item);
  }

  public get(name:string):any {
    const item = JSON.parse(localStorage.getItem(name));
    return item;
  }

}
