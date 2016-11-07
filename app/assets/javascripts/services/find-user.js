(function() {
  angular.module('app').service("findUser", ["$http", function($http) {

    return {
      get: function() {
        $http.get('https://still-badlands-73085.herokuapp.com/users',
          { username: 'chloe' })
          .success(function (response) {
              console.log(response);
              //this.put(response[0].data.score);
          }, function (error) {
              console.log('an error occurred', error);
          });
      },
      put: function(data) {
        $http.put('https://still-badlands-73085.herokuapp.com/users',
          { username: data })
          .then(function (response) {
              console.log('all is good', response);
          }, function (error) {
              console.log('an error occurred', error);
          });
      }
    }
  }])
})();
