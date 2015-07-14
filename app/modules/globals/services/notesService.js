angular.module('boilerApp.globals.services', [])
	   .factory('notesService', function() {
		   
		   var uuid = 0;
		   var createRandomNote = function(row, col) {
			   var colors = ["color1", "color2", "color3", "color4"];
			   return {
				   id: uuid++,
				   title: 'Title',
				   color: colors[Math.floor(Math.random() * (colors.length))],
				   sizeX: 2, 
				   sizeY: 2, 
				   text: 'Description',
				   row: row || 0, 
				   col: col || 0   
			   }
		   }
		   
		   var arrNotes = [];
		   return {
			   addNote: function() {
				   var item = createRandomNote(0,0);
				   arrNotes.push(item);
				   return item;
			   },
			   removeNote: function(note) {
				   arrNotes.splice(arrNotes.indexOf(note),1);
			   },
			   getRandomNotes: function(n) {
				   arrNotes = [];
				   
				   for(var i=0;i<=n-1;i++) {
					   arrNotes.push(createRandomNote(0,i*2));
				   }
				   
				   return arrNotes;
			   },
			   getNotes: function() {
				   return arrNotes;
			   } 
		   }
	   })
    