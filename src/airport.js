function Airport(id, capacity){
 this._hanger = [];
 this._capacity = capacity;
 this._id = id;

  Airport.prototype.get = function () {
    return this._hanger;

  };


};
