let x = document.querySelector("button");

// x.addEventListener("click",()=>{
//     console.log("button is clicked");
// })

// x.addEventListener("click",()=>{
//     console.log("is clicked");
// })
// x.addEventListener("mouseenter",()=>{
//     console.log("kishore ula poran ");
// })
// x.addEventListener("mouseleave",()=>{
//     console.log("kishore vela poran ");
// })

let fn1=() =>{
    console.log("button clicked ");
};
let fn2 =() =>{
    console.log("I am clicking button");
};
let fn3=()=>{
    console.log("last click button");
};

x.addEventListener("click",fn1)
x.addEventListener("click",fn2)
x.addEventListener("click",fn3)

setTimeout(()=>{
    x.removeEventListener("click",fn2)
},4000)



