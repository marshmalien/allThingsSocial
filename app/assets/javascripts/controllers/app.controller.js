(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['$http', '$location'];

  function AppController($http, $location) {

    this.scrollTo = function(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      })
    }
  };
})();
