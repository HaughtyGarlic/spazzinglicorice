'use strict';

angular.module('nav', ['playlist'])

.controller('NavController', function ($scope, $mdDialog) {

  $scope.songQueue = [{title:'hi'}];

  $scope.showPlaylist = function(ev) {
    $mdDialog.show({
      controller: 'PlaylistController',
      templateUrl: 'app/components/playlist/playlist.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
});