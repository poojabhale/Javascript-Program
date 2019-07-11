var string = "The Quick Brown Fox"
var array =  string.split("");
var patt1 = /[a-z]/g;
var patt2 = /[A-Z]/g;
var output = [];

for(i=0;i<array.length;i++)
{
    if(array[i].match(patt1))
    {
      array[i] = array[i].toUpperCase();
       
    }
    else 
    {
        array[i] = array[i].toLowerCase();
    }    

}
var arr2 = []
var str = array.join('');
   arr2.push(str)
   console.log(arr2)
