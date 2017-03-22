import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WordCapitalizerPipe } from './isolated-unit-tests/pipes/word-capitalizer.pipe';
import { StandaloneButtonComponent } from './isolated-unit-tests/standalone-components/standalone-button.component';
import { ButtonWithServiceComponent } from "./isolated-unit-tests/components-with-services/button-with-service.component";
import {MultiplierPanelComponent} from "./isolated-unit-tests/components-with-io/multiplier-panel.component";
import {MultiplierButtonComponent} from "./isolated-unit-tests/components-with-io/multiplier-button.component";

@NgModule({
  declarations: [
    // Main component
    AppComponent,
    // Components
    StandaloneButtonComponent,
    ButtonWithServiceComponent,
    MultiplierPanelComponent,
    MultiplierButtonComponent,
    // Pipes
    WordCapitalizerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
