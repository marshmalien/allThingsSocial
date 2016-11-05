(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['$http', '$scope'];

  function AppController($http, $scope) {
    $scope.stepInTutorial = "0";
  };
})();
