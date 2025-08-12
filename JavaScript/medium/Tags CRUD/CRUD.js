//* CRUD

//! Create 
//& createElement()

// let e1 =document.createElement("p");
// console.log(e1);
// let e2 = document.createElement("h1")
// console.log(e2);

// let e3 = document.createElement("aside");
// console.log(e3);


//& appendChild()
//~ Syntax --> parent.appendChild(child)

// let body = document.querySelector("body");
// console.log(body);

// body.appendChild(e3)

// e3.appendChild(e2); //*aside tags inside  have h1 tags
// e2.appendChild(e1); //*h1 tags inside have p tags


//!Read
//1.getElementById(Id_Name)
//2.getElementsByClassName(class_Name)
//3.getElementsByTagName(Tag_Name)
//4.querySelector(CSS Selector)
//5.querySelectorAll(CSS Selector)


//~07/08/2025

//!Update

// let h1 = document.querySelector("h1")

//* innerText  ----> element.innerText 
// console.log(h1)
// console.log(h1.innerText);

// h1.innerText="hello!";
// console.log(h1.innerText);

// let h2=document.querySelector("h2");
// h2.innerText="<em>Surya</em>"
// console.log(h2.innerText);

//*innerHTML --> Element.innerHTML
// it will get tag element as element

// let h2=document.querySelector("h2");
// h2.innerHTML="<em>Surya</em>"
// console.log(h2.innerHTML);

//*in Update --- replaceChild(current element , Existing Element)
//! CREATE & Replace the Elements

// let h1 = document.createElement("h1");

// h1.innerHTML =" Hari ";

// document.body.appendChild(h1)

// let h2 = document.createElement("h2")

// h2.innerHTML = "<i> Karthik </i>";

// document.body.replaceChild(h2,h1);

//! Delete the element 
//* in Delete --- removeChild( Element )

//document.body.removeChild(h2);
let h1 = document.querySelector("h1");

// let ul = document.createElement("ul");

//CURD  ON HTML TAGS  IN NOTES




