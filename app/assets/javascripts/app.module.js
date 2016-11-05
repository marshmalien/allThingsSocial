(function() {
  'use strict';

  angular.module('app', ['ui.router', 'LocalStorageModule', 'templates'])
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('home', {
        url: 'home',
        templateUrl: 'home.html',
        controller: 'homepageController as homepage'

      }).state('quiz', {
        url: '/quiz/:id',
        abstract: true,
        templateUrl: 'quiz.html',
        controller: 'quizController as quiz'

      }).state('quiz.question', {
        url: '/quiz/:id/question/:questionId',
        templateUrl: 'question.html',
        controller: 'questionController as question'

      }).state('child', {
        url: 'child',
        templateUrl: 'child.html',
        controller: 'childpageController as childpage'
      })
    })
})();
