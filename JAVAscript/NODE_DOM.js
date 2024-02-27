let x= document.querySelector("#head");
console.log(x.parentNode);
let y=document.querySelector("#head");
console.log(y.childNodes);

function addnew()
{
    const para =document.createElement("p");
    const node= document.createTextNode("suscribe");
    para.appendChild(node);

    const elem=document.querySelector("#box");
    elem.appendChild(para);
}
