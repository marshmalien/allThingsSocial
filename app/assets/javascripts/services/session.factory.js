(function() {
  'use strict';
  angular.module('app').factory('session', ['$cookies', function($cookies) {
    var key = "ats_user";

    return {
      currentUser: function() {
        return $cookies.getObject(key);
      },

      login: function(user) {
        delete user.password;
        $cookies.putObject(key, user);
      },

      logout: function() {
        $cookies.remove(key);
      }
    }
  }])
})();
