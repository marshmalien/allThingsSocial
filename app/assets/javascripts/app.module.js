angular.module('app', ['ui.router', 'LocalStorageModule', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('homeParent', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('homeParent.profile', {
      url: 'profile',
      templateUrl: 'javascripts/templates/profile.html'
    }).state('homeParent.homepage', {
      url: 'homepage',
      templateUrl: 'javascripts/templates/homepage.html'
    });
});
