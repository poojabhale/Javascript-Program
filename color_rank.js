color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
len=color.length;

for(i=1;i<len+1;i++)
{
if(i==1||i==2||i==3)
{
    console.log(i+o[i]+" choice is "+color[i-1]);
}

else
{
    console.log(i+o[0]+" choice is "+color[i-1]);
}
}