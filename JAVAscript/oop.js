class student    // class er vetorer fuctions is called method
{
    constructor(firstname,lastname)
    {
        console.log("object is created");
        this.firstname= firstname;
        this.lastname =lastname;

    }
    displayFullname()
    {
       return  this.firstname +" "+ this.lastname;    }

}

const s1 = new student("UTSHO","DUTTA");  // object creation syntax new
const s2 = new student("AVENGERS","ASSEMBEL");  // object creation 
s1.displayFullname();
const name1 = s1.displayFullname();
const name2 = s2.displayFullname();
console.log(name1,name2);



// inheritence
// by this keyword we call the constructor 
// by super keyword we call the constructor of parent class 


