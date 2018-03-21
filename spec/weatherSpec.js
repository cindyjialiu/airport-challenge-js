describe('Weather', function(){
  var weather = new Weather()

  it('var stormy should have an array with true and false', function(){
    expect(weather._stormy).toEqual(jasmine.arrayContaining([true, false]));
  });

  it('returns boolean', function(){
    expect(weather.isWeatherStormy()).toBeBoolean();

  });

});
