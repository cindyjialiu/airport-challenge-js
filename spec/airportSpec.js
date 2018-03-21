describe("Airport", function() {
  var airport = new Airport('Heathrow');
  var myBackGarden = new Airport("Garden", 1)

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



});
