//Body controller
  angular.module('boilerApp.board.body.controllers',[ 
    'boilerApp.globals.services.notes', 
    'boilerApp.board.body.directives',
    'gridster'
     ])
  .run(['gridsterConfig', function(gridsterConfig) {
      
      gridsterConfig.columns = 8; // the width of the grid, in columns
      gridsterConfig.defaultSizeX = 2; // the default width of a gridster item, if not specifed
      gridsterConfig.defaultSizeY = 2; // the default height of a gridster item, if not specified
      gridsterConfig.minSizeX = 1; // minimum column width of an item
      gridsterConfig.minSizeY = 1; // minimum column height of an item
      
  
  }])
  .controller('BodyController', [
    '$scope', 'notesService', 'boardPositionService',
    function($scope, notesService, boardPositionService) {
      
      var notes = notesService.getNotes();
      var positions = boardPositionService.getPositions();
      
      for(var i in notes) {
        for(var j in positions) {
          
           if(notes[i].id == positions[j].id) {
             notes[i].row = positions[j].row;
             notes[i].col = positions[j].col;
             notes[i].sizeX = positions[j].sizeX;
             notes[i].sizeY = positions[j].sizeY;
           }
        }
      }
       
      $scope.notes = notes;
      
      $scope.$on('resizeNote', function(event,gridster) {
//        console.log("MOVE");
      })

      $scope.$on('removeNote', function(event, note) {
        boardPositionService.deletePosition(note.id);
      })

      $scope.$on('moveNote', function(event,gridster, note) {
        boardPositionService.updatePosition({
            id: note.id,
            row: gridster.targetScope.gridsterItem.row,
            col: gridster.targetScope.gridsterItem.col,
            sizeX: gridster.targetScope.gridsterItem.sizeX,
            sizeY: gridster.targetScope.gridsterItem.sizeY
          });
      })
    }
  ]);