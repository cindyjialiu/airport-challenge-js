function Airport(id, capacity){
 this._hanger = [];
 this._capacity = capacity || 30;
 this._id = id;

  Airport.prototype.get = function () {
    return this._hanger;
  };


};
