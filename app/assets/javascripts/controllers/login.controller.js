(function() {
  'use strict';
  angular.module('app')
    .controller('loginController', ['session', 'signup', 'score', function(session, signup, score) {
      this.user = {};
      this.session = session;
      this.signup = signup;
      this.score = score;

      var userTest = this.score.get(this.user.name);
      // console.log(userTest);
      console.log(userTest);
      console.log(this.user.name);
  }]);
})();
