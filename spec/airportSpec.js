'use strict';

describe('Airport', function() {
    var airport;
    var plane;

    beforeEach(function() {
      airport = new Airport();
      plane = jasmine.createSpyObj('plane',['land']);
    });

    it('contains no planes by default', function() {
      expect(airport.planes()).toEqual([]);
    });

    it('can contain a plane when cleared for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    })


})
