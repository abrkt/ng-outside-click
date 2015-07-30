'use strict';
var template = '<div><div outside-click="clicked()"><div></div></div></div>';

function _appendToDocument($compile, $scope) {
  var clicked = jasmine.createSpy('clicked');
  var $body = angular.element(document.getElementsByTagName('body')[0]);
  $body.append(template);
  $compile($body)($scope);
  $scope.clicked = clicked;
  $scope.$digest();
  return clicked;
}

describe('ng-outside-click', function () {

  beforeEach(module('ngOutsideClick'));


  describe('when child element is clicked', function() {
    it('should do nothing', inject(function($rootScope, $compile) {
      var clicked = _appendToDocument($compile, $rootScope.$new());
      angular.element(document.getElementsByTagName('div')[2]).trigger('click');
      expect(clicked).not.toHaveBeenCalled();
    }));
  });

  describe('when outside element is clicked', function() {
    it('should trigger ng-outside-click', inject(function($rootScope, $compile) {
      var clicked = _appendToDocument($compile, $rootScope.$new());
      angular.element(document.getElementsByTagName('div')[0]).trigger('click');
      expect(clicked).toHaveBeenCalled();
    }));
  });



});
