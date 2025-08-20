let count=0 ;
let product =()=>{

    count ++;
    let label=document.createElement("label");
    label.innerText=`Product ${count}`;

    let nameinput =document.createElement("input");
    nameinput.setAttribute("placeholder","Name");
    nameinput.setAttribute("id","name");

    let quantityinput =document.createElement("input")
    quantityinput.setAttribute("placeholder","Quantity");
    nameinput.setAttribute("id","quantity");

    let priceinput =document.createElement("input")
    priceinput.setAttribute("placeholder","price")
    nameinput.setAttribute("id","price");

    
    let form=document.querySelector("form")

    let div=document.createElement("div")
    
    div.appendChild(label)
    div.appendChild(nameinput)
    div.appendChild(quantityinput)
    div.appendChild(priceinput)
    form.appendChild(div);
    


}
product();

let btn =document.querySelector("button")
btn.addEventListener("click", product)
