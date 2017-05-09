"use strict";

function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
  this._CAPACITY = 10;
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane){
  if(this.isFull()){
    throw new Error('cannot land if the airport is full');
  }
  if(this._weather.isStormy()){
    throw new Error('cannot land during storm');
  }
    this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(){
  if(this._weather.isStormy()){
    throw new Error('cannot takeoff during storm');
  }
    this._hangar.pop();
};

Airport.prototype.isFull = function(){
  if(this._hangar.length > this._CAPACITY){
    return true;
  }
  return false;
};
