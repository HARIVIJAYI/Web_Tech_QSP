//^21/08/2025
// let arr=[10,20,"hari",true,null];

// let[a,b,,,e]=arr;

// console.log(a,b,e);


//!array destructure
//*four level of nexted array
//!left side is destructing         ---     right side create array

// let arr=[10,20,[30,40,[50,60,[70]]]];

// let[a,b,[c,d,[e,f,[g]]]]=arr;
// console.log(a,b,g);
// console.log(c,d,e);

// let [,,[,a]]=arr;
// console.log(a);

// let obj ={
//     name:"harikarthik",
//     age:22,
//     phoneNo:7418591678,
//     gender:"male",
//     address:{
//         district:"myl",
//         state:"TN",
//     }


// }
// let {name,age,address:{state,district}}=obj;
// console.log(name);
// console.log(age);
// console.log(`${state}-${district}`);


//!Spread operator ---> ("....")
//~spread operator in array
// let a= [1,2,3]
// let b=[4,5,6]
// *let c=[a,b]
// let c=[...a,...b]
// console.log(c);

//~ spread opertor in object
// let obj1={name:"hari"};
// let obj2={age:22};
//let obj3={obj1,obj2};
// let obj3={...obj1,...obj2}
// console.log(obj3);

//~rest operator

// function add(...a){
//     return a.reduce((Acc,sum)=>{
//         return Acc+sum;
//     });
// }
// console.log(add(1,2,3,4,5,6,7,8,9,10));

function display(name,age ,...rest){
    console.log(name, age);
    console.log(rest);
}
display("hari", 22, "myl", "TN", 7418591678, true);
