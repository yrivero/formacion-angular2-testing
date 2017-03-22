"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/*
  Copied from:
    https://angular.io/docs/ts/latest/guide/testing.html
 */
var ButtonWithServiceComponent = (function () {
    function ButtonWithServiceComponent() {
        this.isOn = false;
    }
    ButtonWithServiceComponent.prototype.clicked = function () { this.isOn = !this.isOn; };
    Object.defineProperty(ButtonWithServiceComponent.prototype, "message", {
        get: function () { return "The light is " + (this.isOn ? 'On' : 'Off'); },
        enumerable: true,
        configurable: true
    });
    ButtonWithServiceComponent = __decorate([
        core_1.Component({
            selector: 'app-standalone-button-comp',
            template: "\n    <button (click)=\"clicked()\">Click me!</button>\n    <span>{{message}}</span>"
        })
    ], ButtonWithServiceComponent);
    return ButtonWithServiceComponent;
}());
exports.ButtonWithServiceComponent = ButtonWithServiceComponent;
