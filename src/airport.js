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

  Airport.prototype.land = function (plane, stormy) {
      if(plane._airportId != null )
        throw new Error("Plane is landed already!");

      if(this.isFull())
        throw new Error("Airport is full");

      if(stormy)
        throw new Error("It is too stormy to land!");

      plane._airportId = this._id;
      this._hanger.push(plane);
  };


  Airport.prototype.takeOff = function (plane, stormy) {
      if(plane._airportId != this._id )
        throw new Error("Error! Plane not at this airport!");

      if(stormy)
        throw new Error("It is too stormy to take off!");

      plane._airportId = null;
      this._hanger.pop(plane);
  };


};
