"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/*
  Copied from:
    https://angular.io/docs/ts/latest/guide/testing.html#!#isolated-unit-tests
 */
var WordCapitalizerPipe = (function () {
    function WordCapitalizerPipe() {
    }
    WordCapitalizerPipe.prototype.transform = function (input) {
        if (!input || input.length === 0) {
            return '';
        }
        var transformed = input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
        return transformed;
    };
    WordCapitalizerPipe = __decorate([
        core_1.Pipe({ name: 'wordCapitalizer' })
    ], WordCapitalizerPipe);
    return WordCapitalizerPipe;
}());
exports.WordCapitalizerPipe = WordCapitalizerPipe;
