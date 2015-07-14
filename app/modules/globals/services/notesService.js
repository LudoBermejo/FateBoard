

angular.module('boilerApp.globals.services.notes', ['boilerApp.globals.services.localstorage'])

	   .factory('notesService', function(myLocalStorageService) {
		
			

		   
		   var createRandomNote = function(row, col) {
			   
			   return {
				   id: arrNotes.length,
				   title: 'Title',
				   color: "#7bd148",
				   sizeX: 2, 
				   sizeY: 2, 
				   text: 'Description',
				   row: row || 0, 
				   col: col || 0   
			   }
		   }
		   
		   var arrNotes = myLocalStorageService.getNotes();
		   
		   if( !arrNotes ) {
			   arrNotes = [];
				for(var i=0;i<=4;i++) {
					arrNotes.push(createRandomNote(0,i*2));
				}
				
				myLocalStorageService.saveNotes(arrNotes);
		   }
		   
		   return {
			   addNote: function() {
				   var item = createRandomNote(0,0);
				   arrNotes.push(item);
				   myLocalStorageService.saveNotes(arrNotes);
				   return item;
			   },
			   removeNote: function(note) {
				   arrNotes.splice(arrNotes.indexOf(note),1);
				   myLocalStorageService.saveNotes(arrNotes);
			   },
			   updateNote: function(note) {
				   var index = arrNotes.indexOf(note);
				   arrNotes[index] = note;
				   myLocalStorageService.saveNotes(arrNotes);
				   return note;
			   },
			   getNotes: function() {
				   return arrNotes;
			   } 
		   }
	   })
    