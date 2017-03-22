"use strict";
var button_with_service_component_1 = require('./button-with-service.component');
describe('StandaloneButtonComponent, state based testing', function () {
    var button;
    beforeEach(function () {
        button = new button_with_service_component_1.StandaloneButtonComponent();
    });
    /*
        STATE BASED TESTING
     */
    it('Should initially be off', function () {
        expect(button.isOn).toBe(false);
    });
    it('After one click it should be on', function () {
        expect(button.isOn).toBe(false);
        button.clicked();
        expect(button.isOn).toBe(true);
    });
    it('After two clicks it should be off again', function () {
        expect(button.isOn).toBe(false);
        button.clicked();
        expect(button.isOn).toBe(true);
        button.clicked();
        expect(button.isOn).toBe(false);
    });
});
