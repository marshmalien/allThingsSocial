angular.module('app')
.controller('quizController', function($stateParams, $location, $anchorScroll, $scope) {
  this.inProgress = true;
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
  this.quizTwoQuestions = [
    {
      number: 1,
      question: 'Marly ipsum dolor sit amet, consectetuer adipiscing elit?',
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

  $scope.questions = {
    "1": this.quizOneQuestions,
    "2": this.quizTwoQuestions
  };

  this.answerArray = [];

  this.currentQuestions = function() {
    return this.questions[$stateParams.id]
  }

  /*****************************************
  Toggling multi-choice answers (for each question)
  *****************************************/
  this.toggleStatus = function(event, num) {
    $('.option' + num + ' button').removeClass('selected')
    $(event.target).addClass('selected');
  }
  /*****************************************
  Checks for right answers
  1) if anwser is right, rightAnswers will increment by 1
  2) message will then be displayed
  *****************************************/
  this.submitAnswers = function() {
    var rightAnswers = 0;
    for(var i = 0; i < self.answerArray.length; i++) {
      if(self.answerArray[i].userInput === self.answerArray[i].answer) {
        rightAnswers++;
      }
    }
    console.log(rightAnswers);
    if(rightAnswers < self.answerArray.length) {
      $('<h4>').attr('id', 'quizMessage')
        .html('Sorry! You did not pass. You got ' + rightAnswers + ' out of ' + self.answerArray.length)
        .appendTo('.quiz-container')
        .css('background', '#BE4824')
      $('<button>').attr('type', 'button')
        .html('Try Again').appendTo('#quizMessage');
    } else {
      $('<h4>').attr('id', 'quizMessage').html('Awesome! You passed. You got ' + rightAnswers + ' out of ' + self.answerArray.length)
        .appendTo('.quiz-container')
        .css('background', '#1DC985')
      $('<button>').attr({'type': 'button', 'ui-sref': "child"})
        .html('Take me to Tutorial 2')
        .appendTo('#quizMessage');
    }
    /*****************************************
    When user submits answers, page will scroll to bottom
    of page to display message
    *****************************************/
    $location.hash('quizMessage');
    $anchorScroll();
  }

});
