angular.module('boilerApp.board.body.directives', ['gridster'])
    .directive('bodyBoard', function () {
        return {
            restrict: 'AEC', 
            replace: true,
            templateUrl: "modules/board/body/views/templateBody.html",
            controller: 'BodyController'
        }
    });
    
angular.module('boilerApp.board.body.directives').run(['gridsterConfig', function(gridsterConfig) {
    gridsterConfig.columns = 8; // the width of the grid, in columns
    gridsterConfig.defaultSizeX = 2; // the default width of a gridster item, if not specifed
    gridsterConfig.defaultSizeY = 2; // the default height of a gridster item, if not specified
    gridsterConfig.minSizeX = 1; // minimum column width of an item
    gridsterConfig.minSizeY = 1; // minimum column height of an item
}]);

