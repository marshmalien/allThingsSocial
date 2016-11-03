(function() {
  'use strict';

  angular.module('app', ['ui.router', 'LocalStorageModule', 'templates'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html'
      }).state('profile', {
        template: "<p>profile page</p>"
      })
    });
})();
