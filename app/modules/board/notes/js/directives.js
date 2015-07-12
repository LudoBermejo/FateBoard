angular.module('boilerApp.board.notes.directives')
    .directive('noteBoard', function () {
        return {
            restrict: 'AEC', 
            replace: true,
            templateUrl: "modules/board/notes/views/templateNote.html",
            controller: 'NotesController'
        }
    });
