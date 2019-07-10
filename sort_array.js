var library = [ 
	   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
	   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
	   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
	   ];

 var sort_array = library.sort(function(a, b){
 var x = a.title.toLowerCase();
 var y = b.title.toLowerCase();
 if (x < y) {return -1;}
 if (x > y) {return 1;}
 return 0;
});
 console.log(sort_array);
