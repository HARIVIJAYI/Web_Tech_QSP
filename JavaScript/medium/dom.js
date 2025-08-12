//&---->05/08/2025

//~setTimeout
// setTimeout(ccallback_fn, timePeriod(milliseconds),[arguments])

//~setIntervel --> it is used to execute the function at regular time Period.

//!Syntax: setInterval(callback_fn,timeperiod(milliseconds),[arguments]).

//~ clearTimeout it is stop the working of setTimeout Method.
//it accepts the timeout ID.
//!Syntax:clearTimeout(timeoutID)
// let timeout =setTimeout(()=>{
//     alert("will not execute")
// }, 3000)
// clearTimeout(timeout)

//clearIntervel --> it will stop the execution of setInterval method.
// it accepts the interval ID.

//!Syntax: clearInterval(intervalID)

// let interval=setInterval(()=>{
//     alert("Message appear every 3 seconds")
// },3000)
// clearInterval(interval);

//* BOM IS WEB API ---> 5 OBJECTS  (IN WINDOW)
// 1.document //!DOM -- Document Object Model
//2.screen 
//3.history
//4.location
//5.navigator


// Document:

// HTML ---- ❌  ----- JS  AND ALSO  JAVA --- ❌---JS
//* DOM provides the connection.
//! DOM [Document Object Model]
//dom stands for document object model,it is created by the browserin a tree like structure representing the html, because the javascript cannot communicate with htmlelement directly 
//using dom , we can munilate with html , attributes and styles.
// in dom everythonmg is represented in the format of objects or nodes.
//! HTML DOM
            //                       Document
            //                          |
            //                          |
            //                     ROOT ELEMENT
            //                          |
            //                          |
            //     _------------------------------------------------_
            //     |                                                |
            //     |                                                |
            //     |                                                |
            // Element(<head>)                                Element(<body>)


//! DOM Selectors
//& getElementById("id")

// let element1 = document.getElementById("one");
//  console.log(element1);
// // console.dir(element1);

// let element2 = document.getElementById("two")
// console.log(element2);

// let element3 =document.getElementById("third")
// console.log(element3);

//&  getElementByClassName("Class")

// let class_Element=document.getElementsByClassName("first")
// console.log(class_Element);

//~ 06/08/2025
//& getElementByTagName("tag")  --> Array like Object

// let h2 = document.getElementsByTagName("h2");
// console.log(h2);

//& querySelector("css selectors")

// let one= document.querySelector("#one");
// console.log(one);

// let first = document.querySelector(".first");
// console.log(first);

// let h2 =document.querySelector("h2");
// console.log(h2);
// let p = document.querySelector("div>p");
// console.log(p);

//& querySelectorAll("css selector")

// let one = document.querySelectorAll(".first")
// console.log(one);

// let h2 = document.querySelectorAll("h2");
// console.log(h2);

// let p = document.querySelectorAll("div>p");
// console.log(p);

//& DOM Selectors
//!-----------Notes----------------