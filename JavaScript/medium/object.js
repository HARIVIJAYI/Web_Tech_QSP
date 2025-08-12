
//~31/07/2025
//Object in JavaScript
//An object is a collection of key-value pairs, where each key is a string and the value can be any data type, including another object or function.
//Objects are used to store and manipulate data in a structured way, allowing for easy access and modification of properties and methods.
//Objects are mutable, meaning that their properties can be changed after they are created.
//Objects are created using curly braces {} or the Object() constructor.
//Objects can contain various data types, including strings, numbers, booleans, arrays, and other objects.
//Objects can have methods, which are functions that are associated with the object and can be called using the dot notation.

let person ={
    name : "Hari Karthik",
    age : 21,
    gender :"Male",
    hobbies : ["Reading","Travelling","Gaming"],
    isMarried : false,
    job:undefined,

    address:{
        StreetNo: 16,
        streetName:"Naidu west Street",
        town: "Manalmedu",
        district:"Mayiladuthurai",
        state:"Tamil Nadu"
    },
    

    Reading()
    {
        console.log(`${this.name} loves reading`);
    },
    Travelling()
    {
        console.log("I love travelling");
    },
    Gaming()
    {
        console.log("I love reading");
    }

};
//! Accessing Object Properties

//* dot notation to Reading the data from the object
// console.log(person);
// console.log(`Name : ${person.name}`);
// console.log(`Age : ${person.age}`);
// console.log(`Gender :${person.gender}`);
// console.log(`Hobbies : ${person.hobbies}`);
// console.log(`Is Married : ${person.isMarried}`);
// console.log(`Street No : ${person.address.StreetNo}`);
// console.log(`Street Name : ${person.address.streetName}`);  

// person.Reading(); //* Calling the method Reading from the object 

//! updating data  
// console.log("Updating the data");
// console.log(person.job);

// person.job ="Software Engineer";
// console.log(`Job : ${person.job}`);

//! Delete the data from the object
// console.log("To delete the data ");
// delete person.Gaming();
// console.log(person);

//~01/08/2025
//! methods

//^Object .keys()
//it will give a arrays of all the keys present in the passed object 
//* syntax -- object.keys(ObjName)

// let keys = Object.keys(person);
// console.log("Keys of the object are : ", keys);


// //^Object .values()
//it will give a arrays of all the values present in the passed object
//* syntax -- object.values(ObjName)

// let values = Object.values(person);
// console.log("Values of the object are : ", values); 

// //^Object .entries()
//it will give a arrays of all the key-value pairs present in the passed object         
//* syntax -- object.entries(ObjName)    

// let entries = Object.entries(person);
// console.log("Entries of the object are : ", entries); 


//^Object .assign()
//it will copy the values of all enumerable own properties from one or more source objects to a target object


// it is used to merge the muiltiple objects together, it will merge all the passed objects into the first object , hence first object is updated.
//To prevent the first object from updating, we can pass empty object as first object.

//* syntax -- object.assign(storing, object , object....)

// let persoon2= {
//     name:"kishore"

// },
// persoon3= {
//     name:"sidarthan",
//     age: 22,
// },
// persoon4= {
//     name:"shriram",
//     age =24,
// };
// let mergedPerson = Object.assign({}, person, persoon2, persoon3, persoon4);
// console.log("Merged Person : ", mergedPerson);

//^object.seal()
// it is used to prevent the addition and deletion of properties in the object, but it allows the modification of existing properties.
//* syntax -- object.seal(ObjName)

//^object.isSealed()
// it is used to check whether the object is sealed or not, it will return true if the object is sealed, otherwise false.
//* syntax -- object.isSealed(ObjName)

// Object.seal(person);
// console.log("Is the object sealed ? ", Object.isSealed(person));
// person.job = "Software Engineer"; // it will work
// delete person.age; // it will not work       
// person.name = "Hari"; // it will work
// console.log("After sealing the object : ", person);

// //*Adding is not possible
// person.childern = ["A", "B"]; // it will not work
// console.log("After trying to add a new property : ", person);
// //*deletion is not possible
// delete person.job;
// console.log("After trying to delete a property : ", person);

// //*Updation is possible

// person.age =23;
// console.log(person);


// //^Object.freeze()
// //it is used to prevent addition , deletion and updateion of properties to the object.
// //* syntax -- Object.freeze(ObjName)

// //^Object.isFrozen()
// // it will check wether the object is frozen or not . if frozen it returns true, else false.
// //*syntax -- Object.isFrozen(ObjName)


// //^hasOwnProperty()
// // it is used to check whether the object has the specified property or not, it will return true if the object has the specified property, otherwise false.
// //* syntax -- ObjName.hasOwnProperty("propertyName")    

// console.log("Does the person object has property 'name' ? ", person.hasOwnProperty("name"));
// console.log("Does the person object has property 'job' ? ", person.hasOwnProperty("job"));

//~ 02/08/2025

//^Create an object

// let obj = {
//     name:"Harikarthik",
//     age:22,
//     gender:"male",
//     skills:["Java", "HTML", "CSS", "JavaScript"],
//     country:"India",
// };

//* console.log(obj);

//^ js ----> JSON
// let json_obj =JSON.stringify(obj);
// console.log(json_obj);

//^ JSON ---> JS

// let js_obj = JSON.parse(json_obj);
//* console.log(js_obj);

const jsonData = `[
  {
    "name": "Virat Kohli",
    "role": "Batsman",
    "age": 36,
    "matches": 292,
    "runs": 13848,
    "wickets": 4
  },
  {
    "name": "Rohit Sharma",
    "role": "Batsman",
    "age": 38,
    "matches": 262,
    "runs": 10709,
    "wickets": 8
  },
  {
    "name": "Jasprit Bumrah",
    "role": "Bowler",
    "age": 31,
    "matches": 133,
    "runs": 215,
    "wickets": 348
  },
  {
    "name": "Ravindra Jadeja",
    "role": "All-Rounder",
    "age": 36,
    "matches": 296,
    "runs": 3096,
    "wickets": 493
  },
  {
    "name": "Shubman Gill",
    "role": "Batsman",
    "age": 26,
    "matches": 74,
    "runs": 3702,
    "wickets": 0
  }
]`;

let jsObj=JSON.parse(jsonData);
//* console.log(jsObj);

//^Iterating through the array of objects

//  jsObj.forEach(element =>{
// //     console.log(element.name);
// //    console.log(`Name:${element.name}, Role :${element.role}, matches:${element.matches}`);
//  });


//^Filtering the array of objects based on a condition

// let filteredPlayers = jsObj.filter(element .role ==="Batsman" && element.role === "Bowler" && );
// console.log("Filtered Players: ", filteredPlayers);
//  });

let roles = jsObj.map(element => element.role).filter((value, index, self) => self.indexOf(value) === index);
console.log("Unique Roles: ", roles);