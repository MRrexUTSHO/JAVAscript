const student = ["IRONMAN","SPIDERMAN" ,"CAPTAIN_AMERICA"]
console.log(student[1]);

const stu = [
    {
        name:"BBB",
        roll:111,
        marks:2252
    },
    {
        name:"CCC",
        roll:112,
        marks:2100
    },
    {
        name:"CCC",
        roll:114,
        marks:2245
    }
]

console.log(stu);
console.log(stu[2]);
console.log(stu[2].roll);




const stud =["KKK","PPP","HHH","OOO"];
console.log(stud.length);
const len = stud.length;
//len nam ka dabba me 4 hain ... use as you want ...
stud.pop();
console.log(stud);
stud.pop();
console.log(stud);
stud.push("LLL");
console.log(stud);
console.log(".........................");
const newStud = stud.slice(2);
console.log(stud);
console.log(newStud);


console.log("..........................."); 

// like slice we have : 
//sort:alphabet wise sort
// reverse:  ulte jabe sequence
//


const number=[45,52,86,96,62];
console.log(number);
number[1]=100;
console.log(number);
// in js special loop "forEach" (values,index,array)
number.forEach
(
    function(values,index,array)
    {
        console.log(values,index,array);
    }
)

number.forEach
(
    function(values)
    {
        console.log(values);
    }
)
console.log("..................");
console.log("..................");

console.log("..................");

console.log("..................");

console.log("..................");

console.log("..................");


// map concept 

const num2 = [3,5,4,6];
const NEWnum2 =num2.map
(
    function(values,index,array)
    {
        return values*3;
    }
)
console.log(num2);
console.log(NEWnum2);


const names = ["UTSHO","BISHAL","SWAPNIL"];
const NEWnames =names.map
(
    function(values,index,array)
    {
        return "Mr." + values;
    }
)
console.log(names);
console.log(NEWnames);

