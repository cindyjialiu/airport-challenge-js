describe("Airport", function() {
  var airport = new Airport('Heathrow');
  var myBackGarden = new Airport("Garden", 1);
  var plane = new Plane(747);

  beforeEach(function(){
    sunny = new Weather();
    spyOn(sunny, 'isWeatherStormy').and.returnValue(false);
    stormy = new Weather();
    spyOn(stormy, 'isWeatherStormy').and.returnValue(true);
  });



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
  });

  it('adds plane to the hanger', function(){
    airport.land(plane, sunny.isWeatherStormy());
      expect(airport.get()).toEqual(jasmine.arrayContaining([plane]));
  });


  it('throws an error if plane airport id is not null', function(){
    expect(function(){airport.land(plane, sunny.isWeatherStormy())}).toThrowError('Plane is landed already!');
  });

  it('throw an error if airport is full', function(){
    myBackGarden._capacity = 0;
    var plane1 = new Plane(777);
    expect(function(){myBackGarden.land(plane1, sunny.isWeatherStormy())}).toThrowError('Airport is full')
  });

  it('throw an error if weather is stormy', function(){
    var plane1 = new Plane(777);
    expect(function(){airport.land(plane1, stormy.isWeatherStormy())}).toThrowError('It is too stormy to land!')
  });


});
