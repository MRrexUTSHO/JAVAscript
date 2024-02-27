//object
// const diye object 

const student = {
    firstName:"IRONMAN",
    lastName: "SPIDERMAN",
    status: "avengers",
    pin : 700077,
    display:function()
    {
        return this.firstName + " " + this.lastName
        // take nothing return something
    }
}
const fullName =student.display();
console.log(fullName);

console.log(student.firstName);
