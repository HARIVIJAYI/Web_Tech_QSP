let child =document.getElementById("child");
child.addEventListener("click",()=>{
    console.log("child clicked");
});

let parent=document.getElementById("parent");
parent.addEventListener("click",()=>{
    console.log("parent clicked");
});

let grandparent=document.getElementById("grandparent");
grandparent.addEventListener("click",()=>{
    console.log("grand parent clicked");
},
true);

// true --->event capturing //!top to bottom
// target element is div.
//false --->Event bubbling //!bottom to top 
