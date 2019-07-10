var r1=require("readline")
var prompts=r1.createInterface(process.stdin,process.stdout)
prompts.question("enter start point :",function(start){

    prompts.question("enter end point :",function(end){


for(i=start;i<=end;i++)
{
    console.log(i);
}

    });
});
