angular.module('app')
.controller('quizOneController', function() {
  var self = this;
  this.quizOneQuestions = [
    {
      number: 1,
      question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
      options: {
        a: 'Lorem ipsum dolor sit amet',
        b: 'Aliquam tincidunt mauris eu risus.',
        c: 'Vestibulum auctor dapibus neque.',
        d: 'Pellentesque habitant morbi tristique.'
      },
      answer: 'b'
    },
    {
      number: 2,
      question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
      options: {
        a: 'Lorem ipsum dolor sit amet',
        b: 'Aliquam tincidunt mauris eu risus.',
        c: 'Vestibulum auctor dapibus neque.',
        d: 'Pellentesque habitant morbi tristique.'
      },
      answer: 'b'
    },
    {
      number: 3,
      question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
      options: {
        a: 'Lorem ipsum dolor sit amet',
        b: 'Aliquam tincidunt mauris eu risus.',
        c: 'Vestibulum auctor dapibus neque.',
        d: 'Pellentesque habitant morbi tristique.'
      },
      answer: 'b'
    },
    {
      number: 4,
      question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
      options: {
        a: 'Lorem ipsum dolor sit amet',
        b: 'Aliquam tincidunt mauris eu risus.',
        c: 'Vestibulum auctor dapibus neque.',
        d: 'Pellentesque habitant morbi tristique.'
      },
      answer: 'b'
    }
  ]

  this.answerArray = [];

  this.checkAnswer = function(key, answer) {
    self.answerArray.push({
      userInput: key,
      answer: answer
    })
  }

  this.submitAnswers = function() {
    var rightAnwers = 0;
    for(var i = 0; i < self.answerArray.length; i++) {
      console.log('in');
      if(self.answerArray[i].userInput === self.answerArray[i].answer) {
        rightAnwers++;
      }
    }
    if(rightAnwers < self.answerArray.length) {
      $('<h4>Sorry! You did not pass. You got ' + rightAnwers + ' out of ' + self.answerArray.length + '</h4>').appendTo('.quiz-container');
      $('.quiz-container h4').scrollTo( '100%' );
    } else {
      $('<h4>Awesome! You passed. You got ' + rightAnwers + ' out of ' + self.answerArray.length + '</h4>').appendTo('.quiz-container')
    }
  }

});
