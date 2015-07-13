//Notes controller

  angular.module('boilerApp.board.notes.controllers',[ 'boilerApp.globals.services', 'boilerApp.board.notes.directives',"xeditable" ])
  .controller('NotesController', [
    '$scope', 'notesService',
    function($scope, notesService) {
      
      $scope.editingTitle = false;
      $scope.removeNote = function(note) {
        if(note) {
          $scope.$emit("removeNote", notesService.removeNote(note));
          return true;
        } else {
          return false;
        }
        
      }
      
      $scope.showEditName = function($event) {
        $scope.editingTitle = true;
        
      }
      
      $scope.closeEditingName = function($event) {
       $scope.editingTitle = false;
        
      }
    }
  ]);