'use strict';

describe('ng-outside-click', function() {

  beforeEach(module('ngOutsideClick'));

  var clicked;

  beforeEach(inject(function($rootScope, $compile) {
    clicked = jasmine.createSpy('clicked');
    var $body = angular.element(document.getElementsByTagName('body')[0]);
    $body.html('<div><div outside-click="clicked()"><div></div></div></div>');
    var $scope = $rootScope.$new();
    $compile($body)($scope);
    $scope.clicked = clicked;
    $scope.$digest();
  }));

  describe('when the marked element is clicked', function() {
    it('should do nothing', function() {
      angular.element(document.getElementsByTagName('div')[1]).trigger('click');
      expect(clicked).not.toHaveBeenCalled();
    });
  });

  describe('when a child element is clicked', function() {
    it('should do nothing', function() {
      angular.element(document.getElementsByTagName('div')[2]).trigger('click');
      expect(clicked).not.toHaveBeenCalled();
    });
  });

  describe('when an outside element is clicked', function() {
    it('should trigger outside-click attribute', function() {
      angular.element(document.getElementsByTagName('div')[0]).trigger('click');
      expect(clicked).toHaveBeenCalled();
    });
  });

});
