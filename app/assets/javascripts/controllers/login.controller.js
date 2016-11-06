(function() {
  'use strict';
  angular.module('app')
    .controller('loginController', ['session', 'signup', function(session, signup) {

      this.user = {};
      this.session = session;
      this.signup = signup;

      // this.sendPost = function(name) {
      //   var url = "https://still-badlands-73085.herokuapp.com/users";
      //   var data = {
      //     "username": name,
      //     "score": 0
      //   }
      //   session.post(url, JSON.stringify(data))
      //   console.log('post data');
      // }
  }]);
})();
