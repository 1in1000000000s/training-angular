/* global inject */
'use strict';

describe('scope nesting', function() {
  var $scope1, $scope2,
      actrl, fctrl;

  beforeEach(module('acme'));
  beforeEach(inject(function($rootScope, $controller) {
    $scope1 = $rootScope.$new();
    $scope2 = $scope1.$new();
    actrl = $controller('AcmeController', {$scope: $scope1});
    fctrl = $controller('FooController', {$scope: $scope2});
  }));


  describe('AcmeController', function() {
    it('shoud define data object', function() {
      expect($scope1.data).toBeDefined();
      expect(typeof $scope1.data).toBe('object');
    });

    it('shoud define default name', function() {
      expect($scope1.data.name).toBeDefined();
      expect($scope1.data.name).toBe('Ferko Mrkvička');
    });

    it('shoud change name by controller action', function() {
      actrl.setName('Betty Lee');
      expect($scope1.data.name).toBe('Betty Lee');
    });
  });


  describe('FooController', function() {
    it('shoud have name on parent scope', function() {
      expect($scope2.data.name).toBeDefined();
      expect($scope2.data.name).toBe('Ferko Mrkvička');
    });

    it('shoud change name by controller action', function() {
      fctrl.setName('John Doe');
      expect($scope1.data.name).toBe('John Doe');
      expect($scope2.data.name).toBe('John Doe');
    });
  });
});
