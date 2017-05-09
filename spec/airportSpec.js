'use strict';

describe('Airport', function() {
    var airport;
    var plane;
    var weather;

    beforeEach(function() {
      weather = jasmine.createSpyObj('weather',['isStormy']);
      airport = new Airport(weather);
      plane = jasmine.createSpyObj('plane',['land']);

    });

    it('contains no planes by default', function() {
      expect(airport.planes()).toEqual([]);
    });

  describe('under normal conditions',function(){

    beforeEach(function(){
    weather.isStormy.and.returnValue(false);
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
});

    describe('under stormy conditions', function(){

      beforeEach(function(){
        weather.isStormy.and.returnValue(true);
  });

  it('does not let plane to takeoff if stormy', function(){
    expect(function(){airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
  });

  it('does not let plane to land if stormy', function(){
    expect(function(){airport.clearForLanding();}).toThrowError('cannot land during storm');
  });
});
  it('does not let plane to land if the airport is full', function(){
    spyOn(airport, 'isFull').and.returnValue(true);
    expect(function(){airport.clearForLanding();}).toThrowError('cannot land if the airport is full');
  });
});
