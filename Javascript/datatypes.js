//in javascript, there are two main data types



// object data type
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); //accessing object properties
console.log(person.age); //accessing object properties
console.log(person.city); //accessing object properties
 // array data type
let number = [1, 2, 3, 4, 5];
console.log(number[0]); //accessing array elements
console.log(number[1]); 
console.log(number[2]); 
console.log(number[3]); 
console.log(number[4]); 

//mixed data type
let mixed = [1, "hello", true, { name: "John" }, [1, 2, 3]];
console.log(mixed[0]); //accessing mixed data type elements
console.log(mixed[1]); 
console.log(mixed[2]); 
console.log(mixed[3].name); //accessing object property in mixed data type
console.log(mixed[4][2]); //accessing array element in mixed data type

//map or array
//map creates a new array by applying a function to each element of the original array
let newarray = [1,2,3,4,5];
let squaredArray = newarray.map(num => num * num); //SQAURED UP THE ARRAY
console.log(squaredArray[3]); // Output: 16
