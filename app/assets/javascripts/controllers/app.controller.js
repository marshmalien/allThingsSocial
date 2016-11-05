(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['$http', '$state'];

  function AppController($http, $state) {
    $state.go('login');
  };
})();
