//Notes controller

  angular.module('boilerApp.board.notes.controllers',[ 'boilerApp.globals.services', 'boilerApp.board.notes.directives',"xeditable", 'hc.marked' ])
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
        $scope.editingName = true;
        
      }
      
      $scope.closeEditingName = function($event) {
       $scope.editingName = false;
      }
      
      $scope.showEditText = function() {
        $scope.editingText = true;
      }
      
      $scope.closeEditingText = function($event) {
       $scope.editingText = false;
      }

    }
  ]);