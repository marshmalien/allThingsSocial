(function() {
  'use strict';
  angular.module('app').factory('score', ['$http', function($http) {
    return {
      put: function() {
        $http({
          url: "https://still-badlands-73085.herokuapp.com/users",
          method: "PUT",
          data: {

          }
        });
      }
    }
  })
})();
