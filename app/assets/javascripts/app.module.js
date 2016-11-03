(function() {
  'use strict';

  angular.module('app', ['ui.router', 'LocalStorageModule', 'templates'])
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homepageController as homepage'
      }).state('profile', {
        templateUrl: 'profile.html'
      });
    });
})();
