function mouseDownEvent()
{
   setTimeout(()=>
   {
    console.log("mouse down step 1");

    document.querySelector("#box").style.backgroundColor="green"; 
   },4000)
}
function onMouseUpEvent()
{
    setTimeout(()=>
    {
        document.querySelector("#box").style.backgroundColor="#8b008b"; 
    console.log("mouse up step 2");
    },3000)

}
function clickEvent()
{
    setTimeout(()=>
    {
        document.querySelector("#box").style.backgroundColor="DarkRed"; 
    console.log("mouse clk step 3");
    },3000)

}


function demo()
{
    let x= document.querySelector("#firstName");
    console.log(x.value);
    x.value=x.value.toUpperCase();
}


function getData()
{
    console.log("booooooom");
}