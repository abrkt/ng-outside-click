# ng-outside-click
Angular directive to evaluate expression when an element outside the directive element is clicked
## Usage
``` html
<script>
  var app = angular.module('app', ['ngOutsideClick']).run(function($rootScope){
    $rootScope.outsideClick = function(){
      console.log('clicked outside');
    }
  });
</script>

<div outside-click="outsideClick()">
  Clicking anywhere outside this div will trigger the expression in outside-click attribute
</div>
```
