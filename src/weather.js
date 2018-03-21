function Weather(){
  this._stormy = [true, false, false, false, false];

  Weather.prototype.isWeatherStormy = function () {
    return this._stormy[ Math.floor(Math.random() * this._stormy.length)];
  }
};
