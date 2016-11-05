(function () {
  'use strict';

  angular.module('app').controller('questionController', function($stateParams, $state, $scope) {

    this.question = $scope.questions[$stateParams.id][$stateParams.questionId];

    this.nextQuestion = function(key) {
      if (Number($stateParams.questionId) < 4) {
      $scope.$parent.quiz.answerArray.push(key);
      $state.go('quiz.question', {id: $stateParams.id, questionId: Number($stateParams.questionId) + 1 });
      } else {
        return $scope.$parent.quiz.inProgress = false;
      }
    }
  });
})();
