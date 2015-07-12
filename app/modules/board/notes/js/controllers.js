//Notes controller

  angular.module('boilerApp.board.notes.controllers',[ 'boilerApp.globals.services', 'boilerApp.board.notes.directives' ])
  .controller('NotesController', [
    '$scope', 'notesService',
    function($scope, notesService) {
      $scope.removeNote = function(note) {
        if(note) {
          $scope.$emit("removeNote", notesService.removeNote(note));
          return true;
        }
        else {
          return false;
        }
        
      }
    }
  ]);