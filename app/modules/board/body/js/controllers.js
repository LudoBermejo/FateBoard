//Body controller
  angular.module('boilerApp.board.body.controllers',[ 'boilerApp.globals.services', 'boilerApp.board.body.directives' ])
  .controller('BodyController', [
    '$scope', 'notesService', 
    function($scope, notesService) {
      $scope.notes = notesService.getRandomNotes(5);
    }
  ]);