angular.module('boilerApp.board.header.directives', [])
    .directive('headerBoard', function () {
        return {
            restrict: 'AEC', 
            replace: true,
            templateUrl: "modules/board/header/views/template.html",
            controller: 'HeaderController'
        }
    });