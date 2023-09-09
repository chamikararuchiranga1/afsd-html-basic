console.log("Run Js External!");

// numbers
const age = 18;
// String 
const name = "AFSD";
// boolean 
const bool = true;

const object = {};
const array = [];

// let , var, const

// Let
let a = 12;
// can not redeclared
// let a = 13;
{let b = 90;}
a = 30;
console.log(a);
// console.log(b);

// Var 
var v = "run";
var v = "go";
console.log(v);
{var k = 12}
var v = "38"
console.log(k);

// Const 
const o = 12;
// o = 30;
// const o = 39;
{const y = 98}
// console.log(y);

// Arithmetic Operators 

// Addition (+)
const as = 12;
const n = 34;
const addition = as + n;
console.log(addition);
// Subtraction (-)
const subtraction = n - as;
console.log(subtraction);
// Multiplication (*)
const multiplication = as * n;
console.log(multiplication);
// Division (/)
const division = n / as;
console.log(division);

// Modulus (%)
const modulus = as % n;
console.log(modulus);

// Increment (++)
let h = 10;
h++
h++
console.log(h);

//Decrement
let j = 10;
j--
console.log(j);

// Comparison Operators
const e = 14;
const d = 13;

//Equal (==)
console.log("Equal = ", e == d);

//Not Equal (!=)
console.log("Not Qual = ", e != d );

//Greater than (>)
console.log("Greater than = ", e > d);

//Less than (<)
console.log("Less than = ", e < d);

// Greater than or Equal to (>=)
console.log("Greater than or Equal to = ", e >= d);

// Less than or Equal to
console.log("Less than or Equal to = ", e <= d);

// Logical Operators
const y = false;
const x = true;

// AND (&&)
console.log("AND = ", y && x);

// OR (||)
console.log("OR = ", y || x);

// NOT (!)
console.log("Not = ", !y);

// Function

function myName (name, name1, name2){
    console.log("My name is ",name);
    console.log("My name is ",name1);
    console.log("My name is ",name2);
}

// arrow function
// const myName = () => {
//     console.log("My name is Chamikara");
// }

myName("Chamikara", "AFSD", "ACPT");
// myName("AFSD");
// myName("ACPT");


function NumberEqual (num1, num2) {
    const total = num1 + num2

    return total;
}

const total = NumberEqual(23, 45);
console.log(total);
const total1 = NumberEqual(1345, 9854);
console.log(total1);
// NumberEqual(345, 876)

// FLow Controllers
// if
const student = 600;
const student1 = 80;

if(student >= 50){
    if(student < 100){
        console.log("valid number");
    }else{
        console.log('invalid number');
    }
}else {
    console.log("print student 1");
}

//switch
const val = "AFSD";
switch(val){
    case "Chamikara":
        console.log('1');
        break;
    case "AFSD":
        console.log('2');
        break;
        default:
            console.log('error number');
}

//for loop
const arr = ['A','B','C','D','E']
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// while 
let p = 0;
while(p < arr.length){
    console.log(arr[p]);
    p++
}

// Do while
let i = 0;
do {
    console.log(i);
    i++
}while(i < 10);

console.log('=====================================================');
for(let w=0; w<10; w++){
    console.log(w);
    if(w == 5){break;}
}

// Arrays
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruit = fruits.pop();
// console.log(fruit);

// fruits.push("Kiwi");
// console.log(fruits);

// const fruit = fruits.shift();
// console.log(fruit);

// fruits.unshift('Kiwi');
// console.log(fruits);


// Object
const person = {
    name: 'Chamikara',
    address: 'Panadura',
    run: function(){console.log("Run Chamikara");}
 }

 const name1 = person.name;
 console.log(name1);

 person.run();

//Events
// onChange 
function onChangeText(){
    const text = document.getElementById('text-input').value

    // document.getElementById('name-display').innerHTML = text
    // console.log(text);
}

// onCLick
function clickMe () {
    const text = document.getElementById('text-input').value

    document.getElementById('name-display').innerHTML = text
}

function onMouseOver (){
    document.getElementById('mouse-div').style.backgroundColor = 'green'
    console.log('Mouse over');
}

function onMouseOut (){
    document.getElementById('mouse-div').style.backgroundColor = 'brown'
    console.log('Mouse out');
}

function keyDown () {
    const text = document.getElementById('text-2').value
    document.getElementById('display-4').innerText = text
}

function keyUp () {
    const text = document.getElementById('text-3').value
    document.getElementById('display-5').innerText = text
}



