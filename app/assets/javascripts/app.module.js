(function() {
  'use strict';

  angular.module('app', ['ui.router', 'LocalStorageModule', 'templates', 'ngCookies'])
    .config(["$stateProvider", function($stateProvider) {

      $stateProvider.state('all-templates', {
        url: 'all',
        templateUrl: 'all-templates.html',
        controller: 'allTemplates as all'
      }).state('home', {
        url: 'home',
        templateUrl: 'home.html',
        controller: 'homepageController as homepage'
      }).state('profile', {
        url: 'profile',
        templateUrl: 'profile.html',
        controller: 'profileController as profile'
      }).state('quiz', {
        url: '/quiz/:id',
        abstract: true,
        templateUrl: 'quiz.html',
        controller: 'quizController as quiz'
      }).state('quiz.question', {
        url: '/question/:questionId',
        templateUrl: 'question.html',
        controller: 'questionController as qVM'
      }).state('child', {
        url: 'child',
        templateUrl: 'child.html',
        controller: 'childpageController as childpage'
      }).state('login', {
        url: 'login',
        templateUrl: 'login.html',
        controller: 'loginController as login'
      }).state('register', {
        url: 'register',
        templateUrl: 'register.html',
        controller: 'registerController as register'
      });
    }]);
})();
