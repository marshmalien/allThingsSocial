(function () {
  'use strict';

  angular.module('app').controller('questionController', function($stateParams, $state, $scope, $timeout) {
    this.currentQuizQuestions = $scope.questions[$stateParams.id];
    this.question = this.currentQuizQuestions[$stateParams.questionId];
    this.answered = false;

    this.nextQuestion = function(key) {
      this.answered = true;
      $scope.quiz.answerArray.push({userInput: key, answer: this.question.answer});

      if (Number($stateParams.questionId) < this.currentQuizQuestions.length - 1) {
        $timeout(function () {
          $state.go('quiz.question', {id: $stateParams.id, questionId: Number($stateParams.questionId) + 1 });
        }, 2000);
      } else {
        $scope.quiz.submitAnswers();
      }
    }
  });
})();
