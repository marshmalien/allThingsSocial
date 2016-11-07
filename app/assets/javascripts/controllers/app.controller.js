(function() {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['$http', '$state', '$scope', 'session'];

  function AppController($http, $state, $scope, session) {
    $scope.stepInTutorial = "0";

    console.log(session.currentUser());

    if (session.currentUser()) {
      $state.go('all-templates');
    } else {
      $state.go('login');
    }
  };
})();
