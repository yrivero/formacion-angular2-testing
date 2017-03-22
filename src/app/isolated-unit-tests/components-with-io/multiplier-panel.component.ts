import {Component } from "@angular/core";
import {MultiplierButtonComponent} from "./multiplier-button.component";


@Component({
  selector: 'app-multiplier-panel-comp',
  template: `
    <!-- Number typed in the input field is stored in var "theNumber" in the component -->
    Number: <input type="number" (input)="updateTheNumber($event.target.value)"  /> <br/>
    
    <!-- Option selected in the select field is stored in var "theFactor" in the component -->
    Factor: 
        <select (change)="updateTheFactor($event.target.value)">
          <option value="">Default</option>
          <option value="1" selected>x 1</option>
          <option value="2">x 2</option>
          <option value="4">x 4</option>
        </select>
        <br/>

    <br/>
    
    <!-- 
      When the button is clicked, the value is multiplied.
      Then the button emits the "multiplied" event, the received value is 
      stored into the var "theResult" 
    -->
    Actions: <br/>
        <app-multiplier-button-comp 
          [factor]="theFactor"
          [numberToMultiply]="theNumber"
          (multiplied)="onMultiplied($event)"
        >
        </app-multiplier-button-comp>
      <br/>
    
    <br/>
    
    <!-- When the var "theResult" is modified, it shows here -->
    <span>The result is: [{{theResult}}]</span>    
  `
})
export class MultiplierPanelComponent {

  theNumber: number = null;
  theFactor: number = null;
  theResult: number = null;

  updateTheNumber(updatedNumber: number) {
    this.theNumber = updatedNumber;
  }

  updateTheFactor(updatedFactor: number) {
    this.theFactor = updatedFactor;
  }

  onMultiplied(receivedResult: number) {
    this.theResult = receivedResult;
  }

}
