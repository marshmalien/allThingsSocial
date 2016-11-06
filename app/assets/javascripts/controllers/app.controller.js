(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['$http', '$state', '$scope'];

  function AppController($http, $state, $scope) {
    $scope.stepInTutorial = "0";
    $state.go('login');
  };
})();
