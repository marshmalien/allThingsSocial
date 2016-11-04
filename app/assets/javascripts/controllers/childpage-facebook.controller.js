angular.module('app').controller('childpageController', function() {
  this.instructionSteps = [
    {name: 'stepOne', arrow: 'left', description: "This is where you can write message for all of your daughter's friends to see. Please keep them short and sweet!"},
    {name: 'stepTwo', arrow: 'left', description: 'This is where you will send 99% of your messages to your daughter.'},
    {name: 'stepThree', arrow: 'down', description: "You probably don't need to suggest friends for your daughter."},
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
