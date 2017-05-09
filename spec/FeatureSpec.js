"use strict";


describe('Airport', function(){
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('instructs the plane to land at airport', function() {
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });


});
