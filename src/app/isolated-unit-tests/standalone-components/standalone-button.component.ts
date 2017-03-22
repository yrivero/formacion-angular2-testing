import {Component} from "@angular/core";


/*
  Copied from:
    https://angular.io/docs/ts/latest/guide/testing.html
 */
@Component({
  selector: 'app-standalone-button-comp',
  template: `
    <button (click)="clicked()">Click me!</button>
    <span>{{message}}</span>`
})
export class StandaloneButtonComponent {
  isOn = false;

  clicked() { this.isOn = !this.isOn; }

  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
