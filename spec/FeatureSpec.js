"use strict";


describe('Feature Tests:', function(){
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('instructs the plane to land at airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('instructs plane to take off', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes).not.toContain(plane);

  })
});
