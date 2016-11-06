(function() {
  angular.module('app').factory("signup", ["$http", function($http) {

    return {
      post: function(name) {
        $http({
          url: "https://still-badlands-73085.herokuapp.com/users",
          method: "POST",
          data: {
            username: name,
            score: 0
          }
        }).then(function(response) {
          console.log(response);
          console.log('success!');
        });
      }
    }
  }])
})();
