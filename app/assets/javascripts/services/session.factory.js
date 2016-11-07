(function() {
  'use strict';
  angular.module('app').factory('session', ['$cookies', '$state', function($cookies, $state) {
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
        console.log('logout');

        $cookies.remove(key);
        $state.go('login');
      }
    }
  }])
})();
