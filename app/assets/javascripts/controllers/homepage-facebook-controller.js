angular.module('app')
.controller('homepageController', function() {
  this.instructionSteps = [
    {name: 'stepOne', arrow: 'right', description: 'This posts directly to your profile, not to someone elses.'},
    {name: 'stepTwo', arrow: 'right', description: 'This is the share button. For your kids sake, you will be limited on shares.'},
    {name: 'stepThree', arrow: 'right', description: 'This is your messaging center. Only message people if needed.'},
    {name: 'stepComplete', arrow: null, description: 'You made it through the tutorial. Are you ready for the quiz?'}
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
      $('.stepComplete').fadeIn(500);
    }
  }

});
