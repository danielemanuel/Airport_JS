function Weather() {
    this._STORMY_CHANCE = 0.5;

};

Weather.prototype.isStormy = function(){
   return(Math.random()> this._STORMY_CHANCE);
};