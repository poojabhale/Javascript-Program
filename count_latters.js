var r1=require("readline")
var prompts=r1.createInterface(process.stdin,process.stdout)
prompts.question("enter the string :",function(string){

    var array = Array.from(string);
    output=array.reduce((value,index )=>{
        if(!value[index])
        {
            value[index]=1;
        }
        else{
            value[index]=value[index]+1;
        }return value
    },{});
    console.log(output);
});