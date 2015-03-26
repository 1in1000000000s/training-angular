/* global angular, inject */
'use strict';

describe('<click-selector>', function() {
  var $scope,
      scope,
      el,
      markup = '<click-selector list="data.artists" selected="data.selected" />';

  beforeEach(module('acme'));
  beforeEach(inject(function($httpBackend) {
    $httpBackend.whenGET('/directives/click-selector-isolate.tpl').respond(
      '<ul class="media-list well">\n' +
      '  <li ng-repeat="item in list"\n' +
      '      ng-click="select(item)"\n' +
      '      ng-class="{active: item === selected}"\n' +
      '      class="media">\n' +
      '    <div class="media-left">\n' +
      '      <img ng-src="assets/{{item.avatar}}" class="media-object">\n' +
      '    </div>\n' +
      '    <div class="media-body">\n' +
      '      <h4 class="media-heading">{{item.name}}</h4>\n' +
      '    </div>\n' +
      '  </li>\n' +
      '</ul>\n');
  }));
  beforeEach(inject(function($rootScope, $compile, $httpBackend) {
    el = angular.element(markup);
    $scope = $rootScope.$new();
    $scope.data = {
      artists: [{name: 'Foo', avatar: 'foo'}, {name: 'Bar', avatar: 'bar'}],
      selected: null,
    };

    $compile(el)($scope);
    $httpBackend.flush();
    $scope.$digest();
    scope = el.isolateScope();
  }));


  it('shoud render <click-selector>', function() {
    var items = el.find('li');
    var names = el.find('h4');

    expect(items.length).toBe(2);
    expect(names[0].textContent).toBe('Foo');
    expect(names[1].textContent).toBe('Bar');
  });

  it('should select item', function() {
    var itemToSelect = scope.list[1];

    scope.select(itemToSelect);
    $scope.$digest();

    expect(scope.selected).toBe(itemToSelect);
    expect($scope.data.selected).toBe(itemToSelect);
  });

  it('should switch selection', function() {
    var itemToSelect1 = scope.list[0];
    var itemToSelect2 = scope.list[1];

    scope.select(itemToSelect1);
    $scope.$digest();
    scope.select(itemToSelect2);
    $scope.$digest();

    expect(scope.selected).toBe(itemToSelect2);
    expect($scope.data.selected).toBe(itemToSelect2);
  });

  it('should toggle selection', function() {
    var itemToSelect1 = scope.list[0];

    scope.select(itemToSelect1);
    $scope.$digest();
    scope.select(itemToSelect1);
    $scope.$digest();

    expect(scope.selected).toBe(null);
    expect($scope.data.selected).toBe(null);
  });

  // it('should select item', function() {
  //   var itemToSelect = scope.list[1];

  //   scope.select(itemToSelect);
  //   $scope.$digest();

  //   expect(scope.selected.length).toBe(1);
  //   expect($scope.data.selected.length).toBe(1);
  //   expect(scope.selected[0]).toBe(itemToSelect);
  //   expect($scope.data.selected[0]).toBe(itemToSelect);
  // });

  // it('should select more items', function() {
  //   var itemToSelect1 = scope.list[0];
  //   var itemToSelect2 = scope.list[1];

  //   scope.select(itemToSelect1);
  //   $scope.$digest();
  //   scope.select(itemToSelect2);
  //   $scope.$digest();

  //   expect(scope.selected.length).toBe(2);
  //   expect($scope.data.selected.length).toBe(2);
  //   expect(scope.selected[1]).toBe(itemToSelect2);
  //   expect($scope.data.selected[1]).toBe(itemToSelect2);
  // });

  // it('should deselect item', function() {
  //   var itemToSelect = scope.list[1];

  //   scope.select(itemToSelect);
  //   $scope.$digest();
  //   scope.select(itemToSelect);
  //   $scope.$digest();

  //   expect(scope.selected.length).toBe(0);
  //   expect($scope.data.selected.length).toBe(0);
  // });
});
