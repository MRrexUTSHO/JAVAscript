function login(username,password)
{
    return new Promise((resolve, reject )=>{
        console.log('login is working');
        if(username=='UTSHO'&& password =='123456')
        {
                resolve(username);
        }
        else{
                 reject('error..try again');
        }
    })
}

function displaydata(username)
{
    return new Promise((resolve, reject)=>{
        console.log('displaying data');
        resolve("hello " + username);
       // reject("fail... sorry ....");
    }
     

    )
}

//too much complicated .. to make it easy use Async-await concept                     login('UTSHO','123456').then((data)=>
//too much complicated .. to make it easy use Async-await concept                     {
//too much complicated .. to make it easy use Async-await concept                     console.log(data);
//too much complicated .. to make it easy use Async-await concept                     displaydata(data).then((res)=>{
//too much complicated .. to make it easy use Async-await concept                         console.log(res);
//too much complicated .. to make it easy use Async-await concept                     })
//too much complicated .. to make it easy use Async-await concept                     }
//too much complicated .. to make it easy use Async-await concept                     
//too much complicated .. to make it easy use Async-await concept                     )
//too much complicated .. to make it easy use Async-await concept                     .catch((err)=>{
//too much complicated .. to make it easy use Async-await concept                         console.log(err);
//too much complicated .. to make it easy use Async-await concept                     })


async function doThis()
{
  try
  {
    const data=  await login('UTSHO','123456');
  console.log(data);
  const res = await displaydata(data);
  console.log(res);
  }
  catch
  {
    console.log(err);
  }
}

doThis();

