angular.module('boilerApp.board.body.directives', ['gridster'])
    .directive('bodyBoard', function () {
        return {
            restrict: 'AEC', 
            replace: true,
            templateUrl: "modules/board/body/views/templateBody.html",
            controller: 'BodyController'
        }
    });
    
