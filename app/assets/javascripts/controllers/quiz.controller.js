angular.module('app')
.controller('quizController', function($stateParams, $location, $anchorScroll, $scope, $state) {
  this.rightAnswers = 0;
  this.quizMessage = "";
  this.buttonMessage = "";
  this.passQuiz = false;
  this.nextState = "home";
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
  Checks for right answers
  1) if anwser is right, rightAnswers will increment by 1
  2) message will then be displayed
  *****************************************/
  this.submitAnswers = function() {
    for(var i = 0; i < self.answerArray.length; i++) {
      if(self.answerArray[i].userInput === self.answerArray[i].answer) {
        this.rightAnswers++;
      }
    }
    if ($stateParams.id === '1') {
      if (this.rightAnswers === self.answerArray.length) {
        this.quizMessage = "Awesome! You passed. You got " + this.rightAnswers + " out of " + self.answerArray.length;
        this.buttonMessage = "Next Tutorial";
        this.passQuiz = true;
        this.nextState = 'child';
      } else {
        this.quizMessage = "Sorry! You did not pass. You got " + this.rightAnswers + " out of " + self.answerArray.length;
        this.buttonMessage = "Try Again"
        this.passQuiz = false;
        this.nextState = 'home'
      }
    } else if ($stateParams.id === '2') {
      if (this.rightAnswers === self.answerArray.length) {
        this.quizMessage = "Awesome! You passed. You got " + this.rightAnswers + " out of " + self.answerArray.length;
        this.buttonMessage = "Next Tutorial"
        this.passQuiz = true;
        this.nextState = 'home';
      } else {
        this.quizMessage = "Sorry! You did not pass. You got " + this.rightAnswers + " out of " + self.answerArray.length;
        this.buttonMessage = "Try Again"
        this.passQuiz = false;
        this.nextState = 'child'
      }
    }
  }

  this.goToNextState = function() {
    $state.go(this.nextState)
  }

});
