describe("Airport", function() {
  var airport = new Airport();

  it ("returns empty airport", function(){
    expect(airport.get()).toEqual([]);
  });
});
