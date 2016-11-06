(function() {
  'use strict';
  angular.module('app')
    .controller('loginController', ['session', 'signup', function(session, signup) {
      this.user = {};
      this.session = session;
      this.signup = signup;
  }]);
})();
