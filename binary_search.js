var array=[1,2,3,4,6,7,8,9];
var key=5;
var binarysearch = function(array,key,start,end){
    
    if(start>end)
    return false;

    middle = Math.floor((start+end)/2);

    if(array[middle]==key)
    return true;

    if(array[middle]>key)
    {
        return binarysearch(array,key,start,middle-1)
    }

    else{

        return binarysearch(array,key,middle+1,end)
    }
};

if (binarysearch(array, key, 0, array.length-1)) 
{
    console.log("Element found"); 
}

else 
{
console.log("Element not found"); 
}
   
