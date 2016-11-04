(function() {
  'use strict';

  angular.module('app', ['ui.router', 'LocalStorageModule', 'templates'])
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('parent', {
        url: '/',
        abstract: true,
        template: '<ui-view></ui-view>',
      }).state('parent.home', {
        url: 'home',
        templateUrl: 'home.html',
        controller: 'homepageController as homepage'
      }).state('parent.quizOne', {
        url: 'quiz-one',
        templateUrl: 'quiz-one.html',
        controller: 'quizOneController as quizOne'
      }).state('parent.profile', {
        url: 'profile',
        templateUrl: 'profile.html',
        controller: 'childpageController as childpage'
      }).state('parent.quizTwo', {
        url: 'quiz-two',
        templateUrl: 'quiz-two.html',
        controller: 'quizTwoController as quizTwo'
      });
    })
})();
