//level 2

//    let MYpromise = new Promise(function(resolve,reject)
//    {
//        
//    })

let MYpromise=new Promise((resolve,reject)=>
{
    let x=1;
    if(x==1)
    {
        resolve("okey done" ); //callback//msg=> okey done
    }
    else
    {
        reject("sorry fail");
    }
})
// dot then => resolve wala case   !!!!!!  dot catch => reject wala case
MYpromise.then((res)=>{
    console.log("okey done");
}).catch((err)=>{
    console.log("sorry..error");
});

// fetch promise returnm kore ..


const demo = ()=>
{
    const p =0;
    return new Promise((resolve,reject)=>
    {
       // resolve("ok....");
       // reject("fail....");
       if (p==1)
       {
        resolve("okey ...pass");
       }
       else{
        reject("fail.....");
       }
    })
}

demo().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
});