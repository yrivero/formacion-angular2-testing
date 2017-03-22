"use strict";
var random_number_service_1 = require("../standalone-services/random-number.service");
var composite_random_number_service_1 = require("./composite-random-number.service");
describe('CompositeRandomNumberService, interaction testing', function () {
    /*
       INPUT / OUTPUT TESTING
     */
    var random;
    var composite;
    beforeEach(function () {
        random = new random_number_service_1.RandomNumberService();
        composite = new composite_random_number_service_1.CompositeRandomNumberService(random);
    });
    it('The random number should be always between 0 and 1000', function () {
        var randomNumber = composite.getRandomNumberFrom0To1000();
        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThanOrEqual(1000);
    });
});
