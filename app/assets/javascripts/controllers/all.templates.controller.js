(function() {
  'use strict';
  angular.module('app')
  .controller('allTemplates', function() {
    this.socialMedia = [
      {media: 'Facebook', color: '#3b5998', url: 'home'},
      {media: 'Instagram', color: '#c92f9a', url: ''},
      {media: 'twitter', color: '#1da1f2', url: ''},
      {media: 'Gmail', color: '#e75a4d', url: ''},
      {media: 'LinkedIn', color: '#0274b3', url: ''},
      {media: 'Tinder', color: '#df4723', url: ''}
    ]
  });
})();
