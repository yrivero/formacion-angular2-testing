import {Component, Input, Output, EventEmitter} from "@angular/core";


@Component({
  selector: 'app-multiplier-button-comp',
  template: `
    <button (click)="onClick()">Click me to multiply X {{factor}} !</button>
  `
})
export class MultiplierButtonComponent {
  @Input() factor: number = null;
  @Input() numberToMultiply: number = null;

  @Output() multiplied = new EventEmitter<number>();

  onClick() {
    let result: number = null;

    // Calculate the result
    if (this.numberToMultiply == null) {
      result = 0;
    } else if (this.numberToMultiply != null && this.factor == null) {
      result = this.numberToMultiply * 1;
    } else if (this.numberToMultiply != null && this.factor != null) {
      result = this.numberToMultiply * this.factor;
    }

    // Publish event with the result
    this.multiplied.emit(result);
  }

}
