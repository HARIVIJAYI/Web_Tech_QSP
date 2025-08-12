let arr=[1,2,3,4,5,6,7,8];
    //~  0 1 2 3 4 5 6 7

// arr.filter((element, index, array)=>{console.log(`element - ${element},index - ${index} , array - ${array}`)});

// let even = arr.filter((e,i,a)=>{
//     return e%2==0;

// })
// console.log(even);
// console.log(arr);




// !1.write a program to find alll the odd elements from the Array..

// let odd = arr.filter((e, i, a)=>{
//     return e%2 != 0;

// });

// console.log(`odd numbers are ${odd}`);
// console.log(`full array elements ${arr}`);


//! 2.wap to find all the elements present in even index.
 
// let even_index = arr.filter((e,i,a)=>{
//     return i%2 ==0;

// });

// console.log(`Even Index presented elements are ${even_index} `);  //* 1,3,5,7 




//! 3.wap to find the all elements having even number of digits 

// let even_num = arr.filter((e)=>{
//     return e%2== 0;
// })

// console.log(`even elements are ${even_num}`);
    
//!4.wap to find all the prime numbers from the Array.

// let prime_num = arr.filter((e)=>{
//     for(let i=2; i<e; i++)
//     {
//         if(e%i !=0)
//             return e;
//     }
    
// });
// console.log(prime_num);


let prime_num = arr.filter((e) => {
    if (e < 2) return false; // Exclude numbers less than 2 
    for (let i = 2; i <= Math.sqrt(e); i++) {
        if (e % i === 0) return false; // Not a prime number
    }   
    return true; // Is a prime number
}); 
console.log(`Prime numbers are ${prime_num}`);
// 5.wap to find all the amstrong number from the Array.
let isArmstrong = (num) => {
    let sum = 0;
    let digits = num.toString().length;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
};  

let armstrong_num = arr.filter((e) => isArmstrong(e));
console.log(`Armstrong numbers are ${armstrong_num}`);