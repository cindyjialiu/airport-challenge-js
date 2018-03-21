describe("Airport", function() {
  var airport = new Airport('Heathrow', 10);

  it ("returns empty airport", function(){
    expect(airport.get()).toEqual([]);
  });

  it ('checks airport receives an id', function() {
    expect(airport._id).toEqual('Heathrow');
  });

  it ('checks airport sets capacity 10', function() {
    expect(airport._capacity).toEqual(10);
  });


});
