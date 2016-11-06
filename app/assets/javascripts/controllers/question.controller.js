(function () {
  'use strict';

  angular.module('app').controller('questionController', function($stateParams, $state, $scope, $timeout) {
    this.currentQuizQuestions = $scope.questions[$stateParams.id];
    this.question = this.currentQuizQuestions[$stateParams.questionId];
    this.answered = false;
    this.isCorrect = false;
    this.answerResponse = "";

    this.nextQuestion = function(key, $event) {
      this.answered = true;
      $($event.target).addClass('selected');

      $scope.quiz.answerArray.push({userInput: key, answer: this.question.answer});
      if (this.question.answer === key) {
        this.answerResponse = "Correct!";
        this.isCorrect = true;
      } else {
        this.answerResponse = "Bummer!";
      }
      if (Number($stateParams.questionId) < this.currentQuizQuestions.length - 1) {
        $timeout(function () {
          $state.go('quiz.question', {id: $stateParams.id, questionId: Number($stateParams.questionId) + 1 });
        }, 1000);
      } else {
        $scope.quiz.submitAnswers();
      }
    }
  });
})();
