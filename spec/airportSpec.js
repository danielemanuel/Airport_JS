'use strict';

describe('Airport', function() {
    var airport;

    beforeEach(function() {
      airport = new Airport();
    });

    it('contains the landing planes', function() {
      expect(airport.planes()).toEqual([]);
    })
})
