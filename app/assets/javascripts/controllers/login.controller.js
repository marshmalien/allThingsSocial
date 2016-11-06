(function() {
  'use strict';
  angular.module('app')
    .controller('loginController', [ 'session', function(session) {

      this.user = {};
      this.session = session;

      
  }]);
})();
