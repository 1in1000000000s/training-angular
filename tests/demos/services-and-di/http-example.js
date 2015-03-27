/* global inject */
'use strict';

describe('artistsModel', function() {
  var artistsModel,
      httpGetSpy, httpGetReturnVal,
      httpGetThenSpy;

  beforeEach(module('acme'));
  beforeEach(module(function($provide) {
    httpGetThenSpy = jasmine.createSpy('$http.get.then');
    httpGetReturnVal = {then: httpGetThenSpy};
    httpGetSpy = jasmine.createSpy('$http.get').and.returnValue(httpGetReturnVal);

    $provide.service('$http', function() {
      this.get = httpGetSpy;
    });
  }));
  beforeEach(inject(function(_artistsModel_) {
    artistsModel = _artistsModel_;
  }));


  it('shoud call $http', function() {
    var retVal = artistsModel.getArtists();
    expect(httpGetSpy).toHaveBeenCalled();
    expect(retVal).toBe(httpGetReturnVal);
  });

  it('shoud call $http.then', function() {
    artistsModel.getArtists();
    expect(httpGetThenSpy).toHaveBeenCalled();
    expect(typeof httpGetThenSpy.calls.argsFor(0)[0]).toEqual('function');
  });

  it('shoud limit response payload', function() {
    var payload = {data: ['foo', 'bar', 'baz', 'bax', 'baxs']};
    httpGetThenSpy.and.callThrough();

    artistsModel.getArtists(3);
    var resolveCallback = httpGetThenSpy.calls.argsFor(0)[0];
    var result = resolveCallback(payload);

    expect(result instanceof Array).toBe(true);
    expect(result.length).toBe(3);
  });
});
