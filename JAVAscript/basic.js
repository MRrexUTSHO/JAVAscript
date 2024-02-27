//  output

  console.log("utsho");
  console.log("dutta");
  console.log(5+16);
  console.log(5.2+85.23);
 
// variables...

var x;
x = 10;
console.log(x); 
x=20;
console.log(x);

y= "UTSHO";
console.log(y,typeof y);

let x2 =100;
console.log(x2);

const x3= 10;
console.log(x3);
//x3=25;                       error   ..as const applied ..value will be constant ..value will not changed 
//console.log(x3);             error   ..as const applied ..value will be constant ..value will not changed 
  

var x4=100;
console.log(x4);
{
    var x4=20;
    console.log(x4)
}
{
    let x4=15;
    console.log(x4);
}
console.log(x4);

 // operators....

 var p=4;
 p++;
 p++;
 p++;
 console.log(p);
{
    ++p;
 console.log(p);
}


var l=100;
var b="100";
console.log(l==b); // value chking
console.log(l===b); // value and type chking 



// loop.......
var k;
for (k=4;k<10;k++)
{
    console.log(k);
}

// table-loop
var i=1;
var x=29;
while(i<=50)
{
    console.log(x,"*",i,"=",x*i);
    i++;
}

var n=123;
var i1 ;
for(i1=1;i1<n;i1++)
{
    console.log(n,"*",i1,"=",n*i1);
}

var i=0;
do{
    console.log("hello",i);
    i++;
}while(i<10);


// brk and continue 
var i=0;
while(i<3)
{
    break;
    console.log("hello",i)
    i++;
}
console.log("jungle main kand ho geya ...");