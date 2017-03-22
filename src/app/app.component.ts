import { Component } from '@angular/core';
import { StandaloneButtonComponent } from './isolated-unit-tests/standalone-components/standalone-button.component';
import { MultiplierPanelComponent } from "./isolated-unit-tests/components-with-io/multiplier-panel.component";
import {MultiplierButtonComponent} from "./isolated-unit-tests/components-with-io/multiplier-button.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    StandaloneButtonComponent,
    MultiplierButtonComponent,
    MultiplierPanelComponent

  ]
})
export class AppComponent {
  title = 'The application is working!';
}
