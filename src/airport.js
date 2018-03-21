function Airport(id, capacity){
 this._hanger = [];
 this._capacity = capacity || 30;
 this._id = id;

  Airport.prototype.get = function () {
    return this._hanger;
  };

  Airport.prototype.isFull = function () {
    return (this._hanger.length >= this._capacity);
  };

  Airport.prototype.land = function (plane) {
    this._hanger.push(plane);
  };
};
