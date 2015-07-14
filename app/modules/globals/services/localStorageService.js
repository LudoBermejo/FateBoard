angular.module('boilerApp.globals.services.localstorage', ['LocalStorageModule'])

		.config(function (localStorageServiceProvider) {
		  localStorageServiceProvider
		    .setPrefix('fateBoard')
				.setNotify(true, true);
		})
	   .factory('myLocalStorageService', function(localStorageService) {
		
			function removePos(notes) {
				var removeArray = []
				for(var i in notes) {
					var obj = {
						id: notes[i].id,
						title: notes[i].title,
						text: notes[i].text,
						color: notes[i].color
					} 
					removeArray.push(obj);
				}
				return removeArray;
			}
		
		   return {
			   saveNotes: function(notes) {
				   
				   return localStorageService.set('notes', removePos(notes)); 
			   },
			   
			   getNotes: function() {
				   
				   return localStorageService.get('notes'); 
			   },
			   
			   saveBoardPositions: function(positions) {
				   console.log(positions)
				   return localStorageService.set('board_positions', positions); 
			   },

			    getBoardPositions: function() {
				   
				   return localStorageService.get('board_positions'); 
			   },
			    
		   }
	   })
    