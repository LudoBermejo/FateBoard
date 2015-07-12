//Load controller
  angular.module('boilerApp.board.header.controllers', [])

  .controller('HeaderController', [
    '$scope', 'notesService', 
    function($scope, notesService) {
      $scope.addNote = function() {
        $scope.$emit("noteAdded", notesService.addNote() );
        return true;
      }
    }
  ]);