let count =0;
let product =()=>{

    count++;
    let label = document.createElement("label");
    label.innerText = `Product ${count}`;

    let nameinput = document.createElement("input");
    nameinput.setAttribute("placeholder", "Enter Name");
    nameinput.setAttribute("id", "name");

    let quantityinput = document.createElement("input");
    quantityinput.setAttribute("placeholder", "Enter Quantity");
    quantityinput.setAttribute("id", "quantity");

    let priceinput = document.createElement("input");
    priceinput.setAttribute("placeholder", "Enter Price");
    priceinput.setAttribute("id", "price");

    let form = document.querySelector("form");
// Adding Submit Button 
    let submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("style","Display: inline-block;");

    // Append the submit button to the form
    form.appendChild(submitBtn);


    let div = document.createElement("div");

    div.appendChild(label);
    div.appendChild(nameinput);
    div.appendChild(quantityinput);
    div.appendChild(priceinput);
    div.appendChild(submitBtn);
    
    // Adding a line break for better readability
    div.appendChild(document.createElement("br"));

    form.appendChild(div);
}
product();

let btn = document.getElementById("add");

btn.addEventListener("click", product);


    // Adding event listener to the form

let form = document.querySelector("form");
    
    form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value
   
    let quantity =document.getElementById("quantity").value
   
    let price =document.getElementById("price").value
 


    let object ={
       name: name,
       quantity: quantity,
       price :price,
    };
    console.log(object);

    name.value="";
    quantity.value="";
    price.value="";

});

// Adding a line break for better readability
let lineBreak = document.createElement("br");
    form.appendChild(lineBreak); //add next to add button ---> apply btn
let secttion = document.createElement("section");
    secttion.setAttribute("id", "product-list");
    form.appendChild(secttion);

// Function to display the product list
function displayProductList(product) {
    let productList = document.getElementById("product-list");
    let productItemdiv= document.createElement("div");

    productItemdiv.setAttribute("class", "product-item");
    productItemdiv.setAttribute("style", " border: 1px solid #0e0707ff;");

    let label = document.createElement("label");
    productItemdiv.appendChild(label);
    label.innerText = `Product ${count}`;

    productItem.innerText = `Product Name: ${product.name}, Quantity: ${product.quantity}, Price: ${product.price}`;
    productList.appendChild(productItem);
}
// Adding event listener to the submit button
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;

    let product = {
        name: name,
        quantity: quantity,
        price: price,
    };

    displayProductList(product);

    // Clear the input fields after submission
    document.getElementById("name").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
});