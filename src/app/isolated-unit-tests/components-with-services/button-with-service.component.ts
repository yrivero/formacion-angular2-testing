import {Component} from '@angular/core';
import {RandomNumberService} from '../standalone-services/random-number.service';


/*
  Copied from:
    https://angular.io/docs/ts/latest/guide/testing.html
 */
@Component({
  selector: 'app-button-with-service-comp',
  template: `
    <button (click)="onClick()">Click me!</button>
    <span>[{{ theNumber === null ? "No number" : theNumber }}]</span>`,
  providers: [
    RandomNumberService
  ]
})
export class ButtonWithServiceComponent {

  theNumber: number = null;

  constructor(private randomService: RandomNumberService) {
  }

  public onClick(): void {
    try {
      this.theNumber = this.randomService.getRandomNumber();
    } catch (e) {
      console.log("Error" , e);
      this.theNumber = null;
    }
  }

}
