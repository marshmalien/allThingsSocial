(function() {
  'use strict';

  angular.module('app', ['ui.router', 'LocalStorageModule'])
  .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    abstract: true,
    template: '<ui-view></ui-view>'
  });
})();
