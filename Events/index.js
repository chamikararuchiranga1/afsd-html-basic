console.log("run");

function clickme () {
   const number_1 = document.getElementById("number-1").value
   const number_2 = document.getElementById("number-2").value

   if(number_1 === number_2){
    console.log("Success..!");
   }else{
    console.log("Fail..!");
   }
}

function greaterThan () {
    const number_1 = parseInt(document.getElementById("number-01").value)
    const number_2 = parseInt(document.getElementById("number-02").value)
 
    // console.log(number_1 +" - "+number_2);
    if(number_1 < number_2){
        console.log("Number - 02");
    }else {
        console.log("Number - 01");
    }
 }

 function addition () {
    const number = document.getElementById("adition-number").value;
    let sum = 0;
    for(let i=0; i<number.length; i++){
        sum += parseInt(number[i])
    }
    console.log(sum);
 }

 function marks () {
    const mark = document.getElementById("input-marks").value;
    if(mark >= 75){
        console.log("A");
    }else if(mark >= 65){
        console.log("B");
    }else if(mark >= 45){
        console.log("C");
    }else if(mark >= 35){
        console.log("S");
    }else{
        console.log('fail');
    }
 }

 function MarksSubject () {
    const number_1 = parseInt(document.getElementById("subject-1").value)
    const number_2 = parseInt(document.getElementById("subject-2").value)

    if(number_1 >= 50 && number_2 >= 50){
        console.log("A");
    }else if(number_1 >= 50 || number_2 >= 50){
        console.log("B");
    }else{
        console.log("C");
    }
 }

 function SHowName () {
    let fullName = "";
    const userInput = document.getElementById("input-name").value

switch (userInput) {
    case 'intern': 
    fullName = "Intern Software Engineer";
    break;
  case "se":
    fullName = "Software Engineer";
    break;
  case "ase":
    fullName = "Associate Software Engineer";
    break;
  case "sse":
    fullName = "Senior Software Engineer";
    break;
  case "atl":
    fullName = "Assistant Tech Lead";
    break;
  case "tl":
    fullName = "Tech Lead";
    break;
  default:
    fullName = "error key word..!";
    break;
}

console.log(`Full name: ${fullName}`);
 }


 function printName (){
    const userInput = document.getElementById("input-name1").value

    for(let o=0; o<userInput.length; o++){
        console.log(userInput[o]);
    }
 }

 const nameArray = [];
 function pushArray () {
    const userInput = document.getElementById("input-array").value
     nameArray.push(userInput);
     document.getElementById("input-array").value = "";
 }

 function printArray () {
    console.log(nameArray);
 }

 function clickLogin() {
    const uName = "adMIn";
    const uPass = "12345W";
    const userName = document.getElementById("user").value
    const password = document.getElementById("pass").value

    if(uName.toLowerCase() == userName.toLowerCase() && uPass.toLowerCase == password.toLowerCase()){
        alert('Login Success..!')
    }else{
        alert('Login Fail..!')
    }
 }

 function userTextSubmit(){
    const user = document.getElementById("user-text").value

    let text = ''
    for(let i=0; i<user.length; i++){
        text += user.charAt(i)+"  ";
    }

    document.getElementById('char-desplay').innerHTML = text
 }

//  load random numbers 
var randomArr = [];
for (var i=0; i<50; i++) {
    randomArr.push(Math.round(Math.random() * 100))
}
document.getElementById('random-array-desplay').innerHTML = randomArr;

function search(){
    const num = parseInt(document.getElementById("random-input").value);

    let result = [];
    for (var i=0; i<randomArr.length; i++) {
        if(randomArr[i] % num == 0){
            result.push(randomArr[i])
        }
    }

    document.getElementById('result').innerHTML = result;
}


