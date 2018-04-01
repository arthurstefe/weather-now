import { Component } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  public loading: boolean = false;

  constructor() { }

  public show() {
    this.loading = true;
  }

  public close() {
    this.loading = false;
  }

}
