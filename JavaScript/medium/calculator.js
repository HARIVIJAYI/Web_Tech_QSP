
//!first scenario --> accepts the  arguments 
// let add = (a,b) => a+b;
// let sub =(a,b) => a-b;

// let calculator= (a,b,operator)=> {
//     return operator(a,b);
// };

// console.log(calculator(10,20,add));
// console.log(calculator(10,20,sub));

// second scenario --> returns a function

 function greetgenerator(greeting){
    return function generate(name){
        return `${greeting} ${name}`;
    }
 };

 //declaration 
 let greet = greetgenerator("Hello");
 console.log(greet("hari"));

 let greet2 =greetgenerator("bye");
 console.log(greet2("karthik"));

