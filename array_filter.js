var array = [4,89,7,false,12,1,undefined,"",0,null];
var array1 = array.filter(remove);
var len=array1.length;
var i;
var x=[];

function remove(value) {
 var output = Boolean(value);
 if(output == true)
 {
     return value;
 }
}
 
console.log(array1);