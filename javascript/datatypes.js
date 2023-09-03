// datatypes 2 types - primitive and non primitive (classes n objects)
// strings can have double quotes, single quotes and even back ticks `

const name = 'soham'
const college = 'iiit'
const stream = 'ece'

 // 3 datatypes are - strings shown above, numbers that represent integers and floating point numbers and booleans which are only either of true or false

 //numbers
 const total=0
 const PI = 3.14

 //booleans
 const isPrim = true


 // undefined where value is not assigned at declaration

 let vari
 //undefined
 console.log(vari)

 const a = undefined

 // null datatype  to assign a value not known, so a better option to prev code in line 24 is

 const b = null

 // other primitive types are BigInt and Symbol datatypes
 
 // arrays -> any type of datatypes can be included in arrays

let ar = [9,true,"explicit"]

console.log(ar)

console.log(ar[0]) //access array elements

// undefined used to define anything not initialized
let x
console.log("before initializing")
console.log(x)
x=22
console.log("after initializing")
console.log(x)

const v = undefined // this too is possible

const bigIntNum = 1129n // write small n after no literal, and the moment user does that, datatype changes from ineteger to big integer

// normal int datatype -> 2^53 size which is a huge number of magitude i.e. size n range

// another such variable is null to explicitly mention this variable or value should'nt or does'nt exist. but undefined means just that this variable has'nt been initialized yet, but can be initialized afterwards anytime

// typeof gives us string data
const useOfTypeof = typeof ar // object. cause array in JS is object type

typeof null // object
typeof undefined // undefined
console.log(typeof 1111n) //bigint