(factory() {
  'use strict';
  angular.module('app').factory('session', ['$cookies', function($cookies) {
    var key = "ats_user";

    return {
      currentUser = function() {
        return $cookies.getObject(key);
      }

      login = function(user) {
        $cookes.putObject(key, user);
      }

      logout = function() {
        $cookies.remove(key);
      }
    }
  }])
})();
