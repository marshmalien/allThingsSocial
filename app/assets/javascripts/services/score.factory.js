(function() {
  'use strict';
  angular.module('app').factory('score', ['$http', function($http) {

    return {
      get: function(name) {
        $http({
          url: "https://still-badlands-73085.herokuapp.com/users",
          method: "GET",
          params: {
            username: name
          }
        })
      },
      put: function(id) {
        $http({
          url: "https://still-badlands-73085.herokuapp.com/users",
          method: "PUT",
          data: {
            id: id,
          }
        });
      }
    }
  }])
})();
