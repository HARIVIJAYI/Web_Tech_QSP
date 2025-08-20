let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    console.log("Button clicked");
});

let div = document.querySelector("div");
div.addEventListener("click", (event) => {
    console.log(event);
    div.style.backgroundColor = "red";
    console.log("Div clicked");


});


let div2 = document.querySelector("div");
div.removeEventListener("dbtclick", (event) => {
    console.log(event);
    div.style.backgroundColor = "blue";
    console.log("Div double clicked");
});


