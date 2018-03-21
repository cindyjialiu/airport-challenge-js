describe("Plane", function(){
  var plane = new Plane(1,"Heathrow");

    it ("has plane id of 1", function(){
      expect(plane._id).toEqual(1);
    });

    it ("has plane airport id ", function(){
      expect(plane._airportId).toEqual("Heathrow");
    });

})
