var numArray = [1, 2, 3, 4, 5];
var germanArray = ["eins", "zwei", "drei", "vier", "fünf"];
var array=[];
var combine = numArray.map(german_num);

function german_num(value ,index) {

      array.push("The number " +  numArray[index] + " is called " + germanArray[index] + " in German ")
   }
     console.log(array);