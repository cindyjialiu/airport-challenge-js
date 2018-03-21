describe("Airport", function() {
  var airport = new Airport('Heathrow');
  var myBackGarden = new Airport("Garden", 1);
  var plane = new Plane(747)

  it ("returns empty airport", function(){
    expect(airport.get()).toEqual([]);
  });

  it ('checks airport receives an id', function() {
    expect(airport._id).toEqual('Heathrow');
  });

  it ('checks airport sets capacity to default of 30', function() {
    expect(airport._capacity).toEqual(30);
  });

  it ('checks airport sets capacity to 1', function() {
    expect(myBackGarden._capacity).toEqual(1);
  });

  it('checks if airport is full', function(){
    expect(airport.isFull()).toEqual(false);
  })

  it('adds plane to the hanger', function(){
    airport.land(plane);
      expect(airport.get()).toEqual(jasmine.arrayContaining([plane]));
  })

});
