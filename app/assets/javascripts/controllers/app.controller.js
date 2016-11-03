(function() {
  'use strict';

  angular
    .module('app', [])
    .controller('AppController', AppController);

  AppController.$inject = ['$http'];

  function AppController($http) {
    var self = this;

    self.sayHello = sayHello;

    function sayHello() {
      return 'Hello, World!';
    }
  };
})();
