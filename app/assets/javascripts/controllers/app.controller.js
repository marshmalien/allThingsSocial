(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['$http', '$state', '$scope', 'session'];

  function AppController($http, $state, $scope, session) {
    $scope.stepInTutorial = "0";
    $scope.session = session;

    if (session.currentUser()) {
      $state.go('home');
    } else {
      $state.go('login');
    }
  };
})();
