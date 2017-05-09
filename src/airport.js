"use strict";

function Airport() {
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane){
  if(this.isFull()){
    throw new Error('cannot land if the airport is full');
  }
  if(this.isStormy()){
    throw new Error('cannot land during storm');
  }
    this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(){
  if(this.isStormy()){
    throw new Error('cannot takeoff during storm');
  }
    this._hangar.pop();
};

Airport.prototype.isStormy = function(){
  return false;
};

Airport.prototype.isFull = function(){
  return false;
};
