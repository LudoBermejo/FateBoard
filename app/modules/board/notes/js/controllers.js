//Notes controller

  angular.module('boilerApp.board.notes.controllers',[ 
    'boilerApp.globals.services.notes', 
    'boilerApp.board.notes.directives',
    'xeditable', 
    'hc.marked',
    'ngjsColorPicker'
    
     ])
  .controller('NotesController', [
    '$scope', 'notesService',
    function($scope, notesService) {
      
      var mustSave = false;
      
      $scope.editingTitle = false;
      $scope.removeNote = function(note) {
        if(note) {
          $scope.$emit("removeNote", notesService.removeNote(note));
          return true;
        } else {
          return false;
        }
        
      }

      $scope.$on('gridster-item-transition-end', function(item) {
          $scope.$emit("moveNote", item, $scope.note )
      })      
      
      $scope.showEditName = function($event) {
        mustSave = false;
        $scope.editingName = true;
        return $scope.editingName;
      }
      
      $scope.$watchCollection("note",function(newValue,oldValue) {
        mustSave = true;
      });
      
      $scope.closeEditingName = function() {
        
       if($scope.note) {
         var result = true;
         if(mustSave) {
           result = notesService.updateNote($scope.note);
         }
         
       } else {
         result = true;
       }
       
       $scope.editingName = !result;
       
       return result;
      }
      
      $scope.showEditText = function() {
        mustSave = false;
        $scope.editingText = true;
      }
      
      $scope.closeEditingText = function($event) {
       $scope.editingText = false;
       if(mustSave) {
         notesService.updateNote($scope.note);
       }
      }

    }
  ]);