"use strict";
var random_number_service_1 = require("../standalone-services/random-number.service");
var word_capitalizer_pipe_1 = require("./word-capitalizer.pipe");
describe('CompositeRandomNumberService, interaction testing', function () {
    /*
       INPUT / OUTPUT TESTING
     */
    var random;
    var randomSpy;
    var composite;
    beforeEach(function () {
        random = new random_number_service_1.RandomNumberService();
        randomSpy = spyOn(random, 'getRandomNumber');
        composite = new word_capitalizer_pipe_1.CompositeRandomNumberService(random);
    });
    it('Interaction: Composite should ask Random for a random between 0..1000 and for another 0..1', function () {
        composite.getRandomNumberFrom0To1000();
        expect(random.getRandomNumber).toHaveBeenCalledWith(0, 1000);
        expect(random.getRandomNumber).toHaveBeenCalledWith();
    });
    it('Stubbing and Interaction: Composite should fail if Random fails when asked for the first random number', function () {
        randomSpy.and.throwError('Random failure!');
        try {
            composite.getRandomNumberFrom0To1000();
            fail('Should have thrown an exception');
        }
        catch (e) {
        }
    });
    it('Stubbing and Interaction: Composite should fail if Random fails when asked for the second random number', function () {
        randomSpy.and.returnValue(500); // First random number
        randomSpy.and.throwError('Random failure!');
        try {
            composite.getRandomNumberFrom0To1000();
            fail('Should have thrown an exception');
        }
        catch (e) {
        }
    });
    it('Stubbing: Composite should fail if Random returns a wrong number when asked for 0..1000', function () {
        randomSpy.and.returnValue(1500); // Wrong range!
        try {
            composite.getRandomNumberFrom0To1000();
            fail('Should have thrown an exception');
        }
        catch (e) {
        }
    });
    it('Stubbing: Composite should fail if Random returns a wrong number when asked for 0..1', function () {
        randomSpy.and.returnValue(500); // Right range
        randomSpy.and.returnValue(-1); // Wrong range!
        try {
            composite.getRandomNumberFrom0To1000();
            fail('Should have thrown an exception');
        }
        catch (e) {
        }
    });
});
