

angular.module('boilerApp.globals.services.board', ['boilerApp.globals.services.localstorage'])

	   .factory('boardPositionService', function(myLocalStorageService) {
		
		   var uuid = 0;
		   var arrPositions = myLocalStorageService.getBoardPositions() || [];
		   return {
			   addPosition: function(position) {
				   arrPositions.push(position);
				   myLocalStorageService.saveBoardPositions(arrPositions);
				   return position;
			   },
			   removePosition: function(position) {
				   for(var i=0;i<=arrPositions.length-1;i++) {
					   if(arrPositions[i].id == position.id) {
						   console.log("BORRO");
						   arrPositions.splice(i,1);
						   myLocalStorageService.saveBoardPositions(arrPositions);
						   break;
					   }
				   }
				   return true;
			   },
			   updatePosition: function(position) {
				   for(var i=0;i<=arrPositions.length-1;i++) {
					   if(arrPositions[i].id == position.id) {
						   index = i;
						   break;
					   }
				   }
				   var index = -1;
				   
				   if(index != -1) {
					 arrPositions[index] = position;
				   	 myLocalStorageService.saveBoardPositions(arrPositions);
				   	 return position;
				   } else {
					   return this.addPosition(position)
				   }
				   
			   },
			   getPositions: function() {
				   return arrPositions;
			   } 
		   }
	   })
    