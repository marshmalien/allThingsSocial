(function() {
  'use strict';
  angular.module('app')
  .controller('homepageController', ['$scope', function($scope) {
    $scope.$parent.stepInTutorial = "1";

    this.instructionSteps = [
      {name: 'stepOne', triangle: 'right', arrow: 'up', description: 'This posts directly to your profile, not to someone elses.'},
      {name: 'stepTwo', triangle: 'right', arrow: 'up', description: 'This is the share button. For your kids sake, you will be limited on shares.'},
      {name: 'stepThree', triangle: 'down', arrow: 'down', description: 'This is your messaging center. Only message people if needed.'},
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
        $('html, body').animate({
          scrollTop: $(document).height()
        }, 2000);
      } else if(step === 'stepThree') {
        $('.stepThree').fadeOut(500);
        $('.stepComplete').fadeIn(500);
      }
    }

    $('html, body').animate({
      scrollTop: 0
    }, 1500);

  }]);
})();
