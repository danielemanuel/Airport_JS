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
  });

  it('confirms a plane has take off', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
     expect(airport.planes()).toEqual([]);
  });

  it('knows if it is stormy', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  it('does not clear plane for takeoff if stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.clearForTakeOff();}).toThrowError('cannot takeoff during storm');
  });

})
