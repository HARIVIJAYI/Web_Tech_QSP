let body = document.body;


//^Banner Box creation
let box1 =document.createElement("div")
body.appendChild(box1);

box1.setAttribute("id","box1")

box1.style.width="99vw";
box1.style.height="99vh";
box1.style.backgroundColor ="lightblue";

let box2 = document.createElement("div");
box1.appendChild(box2);

box2.setAttribute("id","box2")

box2.style.width="99vw"
box2.style.height="20vh";
box2.style.border="solid";
box2.style.backgroundColor="aliceblue";

let img =document.createElement("img");
box2.apppendChild(img);

img.setAttribute("src","./logo.webp")
img.setAttribute("alt","Logo Image")
img.setAttribute("style","width: 90px; height: 90px; float: left;")

let h1= document.createElement("h1")
box2.appendChild(h1);

h1.innerHTML="Login / Sign Up"
h1.setAttribute("style","text-align: right;")

let login = document.createElement("div")
box1.appendChild(login)

login.setAttribute("id","login")

login.style.cssText="width: 40vw;height:70vh;margin-top: 80px;margin-left: 520px;display: flex;align-items: center;justify-content: center;background-color: aliceblue;border: gray solid 4px;"

let form =document.createElement("form");
login.appendChild(form);


let Emaillabel= document.createElement("label")
Emaillabel.innerText="Email Id:"
Emaillabel.setAttribute("for","email")
form.appendChild(Emaillabel)

let Emailinput =document.createElement("input")
form.appendChild(Emailinput)

Emailinput.setAttribute("placeholder","Enter Email Id");

let br1=document.createElement("br")
form.appendChild(br1)

let passwordlabel =document.createElement("ladel")
passwordlabel.innerText="Password :"
form.appendChild(passwordlabel);

let Passwordinput=document.createElement("input")
form.appendChild(Passwordinput);

let br2=document.createElement("br")
form.appendChild(br2)

let button=document.createElement("button")
button.innerText="submit"
form.appendChild(button)







