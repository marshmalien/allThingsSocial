(function() {
  'use strict';
  angular.module('app').controller('profileController', function() {
    this.tab = 'user';

    this.setTab = function(tab) {
      this.tab = tab;
    };

    this.isSet = function(tab) {
      return this.tab === tab;
    };

  });
})();
