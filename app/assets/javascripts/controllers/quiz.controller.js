(function() {
  'use strict';
  angular.module('app')
  .controller('quizController', ["$stateParams", "$scope", "$state", "findUser", "session",
  function($stateParams, $scope, $state, findUser, session) {
    this.rightAnswers = 0;
    this.quizMessage = "";
    this.buttonMessage = "";
    this.passQuiz = false;
    this.nextState = "home";
    var self = this;

        this.quizOneQuestions = [
          {
            number: 1,
            question: 'When typing into your status box, where does that info appear?',
            options: {
              a: 'Your profile wall.',
              b: 'All your friends\' walls.',
              c: 'In a private message.',
              d: 'On your top friends\' walls.'
            },
            answer: 'a'
          },
          {
            number: 2,
            question: 'When you click the \"share\" button, where does that content normally appear?',
            options: {
              a: 'Your profile wall.',
              b: 'All your friends\' walls.',
              c: 'In a private message.',
              d: 'On your top friends\' walls.'
            },
            answer: 'a'
          },
          {
            number: 3,
            question: 'How often should you \"share\" content?',
            options: {
              a: 'Every time you see something.',
              b: 'Never.',
              c: 'Once every hour, every day, for the rest of your life.',
              d: 'Three to five posts a day, maximum.'
            },
            answer: 'd'
          },
          {
            number: 4,
            question: 'What does messaging allow you to do?',
            options: {
              a: 'Make a public announcement.',
              b: 'Summon someone immediately.',
              c: 'Send a private message to the specified recipient\(s\).',
              d: 'Broadcast your screen to the world.'
            },
            answer: 'c'
          },
          {
            number: 5,
            question: 'What does the \"chat\" section do?',
            options: {
              a: 'It replicates the message feature in a smaller window.',
              b: 'It replicates the posting of a status.',
              c: 'It opens a new chatroom like AIM or Skype.',
              d: 'It posts on the person\'s wall.'
            },
            answer: 'a'
          }
        ]
        this.quizTwoQuestions = [
          {
            number: 1,
            question: 'When you write a post on someone else\'s profile page, who is able to see what you wrote?',
            options: {
              a: 'The person who owns the profile.',
              b: 'Close family members.',
              c: 'Friends, acquaintances, and possibly strangers.',
              d: 'All of the above.'
            },
            answer: 'd'
          },
          {
            number: 2,
            question: 'Which feature should you use if you want to communicate privately with someone?',
            options: {
              a: 'Posting on their wall \/ profile page.',
              b: 'Messaging \/ chatting.',
              c: 'Tagging them in a post on your wall.',
              d: 'Sharing a post on their wall.'
            },
            answer: 'b'
          },
          {
            number: 3,
            question: 'What should you do when you accidentally post on someone\s wall?',
            options: {
              a: 'Edit the post.',
              b: 'Save the post for later.',
              c: 'Turn off notifications for the post.',
              d: 'Delete the post.'
            },
            answer: 'd'
          },
          {
            number: 4,
            question: 'Do you need to suggest friends for your GROWN ADULT CHILD?',
            options: {
              a: 'Nope.',
              b: 'Definitely not. Like EVER.',
              c: 'It\'s not like they\'re four.',
              d: 'All of the above.'
            },
            answer: 'd'
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
          var user = session.currentUser();
          console.log(user.name);
          findUser.get(user.name);
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

  }]);
})();
