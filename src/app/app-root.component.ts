import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app-root.component.html",
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent {
  optionLabel: string;
  constructor() {
    this.optionLabel = "name";
  }
}