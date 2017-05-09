"use strict";


describe('Feature Tests:', function(){
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });
describe('under normal conditions', function(){

  beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

  it('instructs the plane to land at airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('instructs plane to take off', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes).not.toContain(plane);
  });
});

  describe('under stormy conditions', function(){

    beforeEach(function(){
        spyOn(Math,'random').and.returnValue(0);
      });

  it('prevents takeoff when weather is stormy', function(){
    plane.land(airport);
    spyOn(airport._weather, 'isStormy').and.returnValue(true);
    expect(function(){plane.takeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });

  it('prevents landing when weather is stormy', function(){
    spyOn(airport._weather, 'isStormy').and.returnValue(true);
    expect(function(){plane.land(airport);}).toThrowError('cannot land during storm');
    expect(airport.planes).not.toContain(plane);
  });
});
  it('prevents landing the plane if airport is full', function() {
    spyOn(airport, 'isFull').and.returnValue(true);
    expect(function(){plane.land(airport);}).toThrowError('cannot land if the airport is full');
  })

});
