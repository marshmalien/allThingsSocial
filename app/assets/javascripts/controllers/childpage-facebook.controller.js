(function() {
  'use strict';
  angular.module('app').controller('childpageController', ['$scope', function($scope) {
    $scope.$parent.stepInTutorial = "2";
    this.instructionSteps = [
      {name: 'stepOne', triangle: 'left', arrow: 'down', description: "This is where you can write message for all of your daughter's friends to see. Please keep them short and sweet! This could be seen by anybody!"},
      {name: 'stepTwo', triangle: 'left', arrow: 'up', description: 'This is where you will send 99% of your messages to your daughter. These messages are private.'},
      {name: 'stepThree', triangle: 'down', arrow: 'left', description: "You probably don't need to suggest friends for your daughter."},
      {name: 'stepFour', triangle: 'down', arrow: 'left', description: "If you accidentally post on her wall. Delete it!"},
      {name: 'stepComplete', triangle: null, arrow: null, description: 'You made it through the tutorial. Are you ready for the quiz?'}
    ]

    setTimeout(function(){
      $('.stepOne').fadeIn(500);
    }, 500);

    this.buttonClick = function(step) {
      if(step === 'stepOne') {
        $('.stepOne').fadeOut(500);
        $('.stepTwo').fadeIn(500);
      } else if(step === 'stepTwo') {
        $('.stepTwo').fadeOut(500);
        $('.stepThree').fadeIn(500);
      } else if(step === 'stepThree') {
        $('.stepThree').fadeOut(500);
        $('.stepFour').fadeIn(500);
      } else if(step === 'stepFour') {
        $('.stepFour').fadeOut(500);
        $('.stepComplete').fadeIn(500);
      }
    }

    $('html, body').animate({
        scrollTop: $("#child-one").offset().top
    }, 1500);
  }]);
})();
