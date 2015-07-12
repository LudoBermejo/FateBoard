//Notes controller

  angular.module('boilerApp.board.notes.controllers',[ 'boilerApp.globals.services', 'boilerApp.board.notes.directives',"xeditable" ])
  .controller('NotesController', [
    '$scope', 'notesService',
    function($scope, notesService) {
      $scope.removeNote = function(note) {
        if(note) {
          $scope.$emit("removeNote", notesService.removeNote(note));
          return true;
        } else {
          return false;
        }
        
      }
      
      $scope.showEditName = function($event) {
        var link = angular.element(event.target); //this target is a jQuery lite object
        if(link) {
          var parent = link.parent();
          parent.find(".formEditTitle").removeClass("hide");
          link.addClass("hide");
          return true;
        } else {
          return false;
        }
        
      }
      
      $scope.closeEditingName = function($event) {
        var link = angular.element(event.target); //this target is a jQuery lite object
        if(link) {
          var parent = link.parent().parent().parent().parent().parent();
          parent.find("a").removeClass("hide");
          parent.find(".formEditTitle").addClass("hide");
          return true;
        } else {
          return false;
        }
        
      }
    }
  ]);