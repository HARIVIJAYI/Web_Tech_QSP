//!14-08-2025

let form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    
    let username = document.getElementById("username").value
    //  console.log(inputname.value);
    let useremail =document.getElementById("email").value
    // console.log(useremail.value);
    let usercontact =document.getElementById("contact").value
    // console.log(usercontact.value);


    let object ={
       username: username,
       email: useremail,
       contact :usercontact,
    };
    console.log(object);

    username.value="";
    email.value="";
    contact.value="";

});


