(function() {
  'use strict';

  angular.module('app', ['ui.router', 'LocalStorageModule', 'templates'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('login');

      $stateProvider.state('parent', {
        url: '/',
        abstract: true,
        template: '<ui-view></ui-view>',
      }).state('parent.home', {
        url: 'home',
        templateUrl: 'home.html',
        controller: 'homepageController as homepage'
      }).state('parent.quiz', {
        url: 'quiz/:id',
        templateUrl: 'quiz.html',
        controller: 'quizController as quiz'
      }).state('parent.child', {
        url: 'child',
        templateUrl: 'child.html',
        controller: 'childpageController as childpage'
      }).state('parent.login', {
        url: 'login',
        templateUrl: 'login.html',
        controller: 'loginController as login'
      }).state('parent.register', {
        url: 'register',
        templateUrl: 'register.html',
        controller: 'registerController as register'
      });
    });
})();
