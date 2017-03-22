"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RandomNumberService = (function () {
    function RandomNumberService() {
    }
    RandomNumberService.prototype.getRandomNumber = function (min, max) {
        if ((!min || min == null) && (!max || max == null)) {
            // No args: Random between 0 and 1
            min = 0;
            max = 1;
        }
        else if ((!min || min == null) && max) {
            // No min value, assume lowest possible
            min = Number.MIN_VALUE;
        }
        else if ((!max || max == null) && min) {
            // No max value, assume highest possible
            max = Number.MAX_VALUE;
        }
        else {
        }
        var random01 = Math.random();
        var delta = (max - min) * random01;
        var randomNumber = min + delta;
        return randomNumber;
    };
    RandomNumberService = __decorate([
        core_1.Injectable()
    ], RandomNumberService);
    return RandomNumberService;
}());
exports.RandomNumberService = RandomNumberService;
