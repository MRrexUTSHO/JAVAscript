// document.querySelector("#btn").addEventListener("click",()=>{
//     console.log("ok");
// })

document.querySelector("#btn").addEventListener("click",demo);
document.querySelector("#btn").addEventListener("click",demo2);
    
  function demo()
   {
     console.log("event1");
  }   
  function demo2()
 {     
     console.log("event2");
}
//  .....
//  .....
//  ..... document.querySelector("#btn").onclick = demo;
//  ..... document.querySelector("#btn").onclick = demo2;
//  .....
//  .....// only event 2 showing .. event 1 over write by event 2 
//  .....// in event handling ony one possible not multiple 

// first a event handeler korlam then even listener
// event listner a multiple task possible ....
// event handler a only only one ..... 













