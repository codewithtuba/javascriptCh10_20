// Q.1 
var cityName = prompt("Enter your City Name");
if(cityName === "karachi") {
    alert("Welcome to city of lights");
}
////////////////////////////////////////////////////////////////////

// Q.2 
var gender = prompt("Enter your gender");
if(gender === "male"){
    alert("Good Morning Sir");
}
else if(gender === "female"){
    alert("Good Morning Ma'am");
}
////////////////////////////////////////////////////////////////////

// Q.3
var signalColor = prompt("Enter color of traffic signal");
document.write("<table> <tr> <th>Signal Color</th> ");
document.write("<th> Message </th> </tr>");
if (signalColor === "red") {
  document.write("<tr> <th>" + signalColor + "</th>")
  document.write(" <td> Must Stop </td> </tr>")
}
else if (signalColor === "yellow") {
    document.write("<tr> <th>" + signalColor + "</th>")
    document.write(" <td> Ready to move </td> </tr>")
  }
  else if (signalColor === "green") {
    document.write("<tr> <th>" + signalColor + "</th>")
    document.write(" <td> Move now </td> </tr>")
  }
  else {
    document.write("<tr> <th> red </th>")
  document.write(" <td> Must Stop </td> </tr>")

  document.write("<tr> <th> yellow </th>")
  document.write(" <td> Ready to move </td> </tr>")

  document.write("<tr> <th> green </th>")
    document.write(" <td> Move now </td> </tr> </table>")
  }
////////////////////////////////////////////////////////////////////

// Q.4
var fuel = parseFloat(prompt("Enter your car remaining fuel in litres"));
if (fuel < 0.25) {
  alert ("Please refill the fuel in your car");
}
////////////////////////////////////////////////////////////////////

// Q.5a
var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}

// Q.5b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// Q.5c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// Q.5d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// Q.5e
if (true){
  alert("True");
  }
  if (false){
  alert("False");
  }

// Q.5f
if("car" < "cat"){
  alert("car is smaller than cat");
  }
////////////////////////////////////////////////////////////////////

// Q.6
var obtainedMarks = parseInt(prompt("Enter Your Obtained Marks of Three Subjects"));
var totalMarks = parseInt(prompt ("Enter Your Total Marks of Three Subjects"));
var per = parseInt(((obtainedMarks / totalMarks ) * 100));

if (per >= 80) {
  document.write("<h1>Marks Sheet </h1> <br>")
  document.write("Total marks : ", totalMarks);
  document.write("<br> Marks obtained : ", obtainedMarks);
  document.write("<br> Percentage : ", per + "%");
  document.write("<br> Grade : A-One");
  document.write("<br> Remarks : Excellent");
}
else if(per >= 70) {
  document.write("<h1>Marks Sheet </h1> <br>")
  document.write("Total marks : ", totalMarks);
  document.write("<br> Marks obtained : ", obtainedMarks);
  document.write("<br> Percentage : ", per + "%");
  document.write("<br> Grade : A");
  document.write("<br> Remarks : Good");
}
else if(per >= 60) {
  document.write("<h1>Marks Sheet </h1> <br>")
  document.write("Total marks : ", totalMarks);
  document.write("<br> Marks obtained : ", obtainedMarks);
  document.write("<br> Percentage : ", per + "%");
  document.write("<br> Grade : B");
  document.write("<br> Remarks : You need to improve");
}
else if(per < 60) {
  document.write("<h1>Marks Sheet </h1> <br>")
  document.write("Total marks : ", totalMarks);
  document.write("<br> Marks obtained : ", obtainedMarks);
  document.write("<br> Percentage : ", per + "%");
  document.write("<br> Grade : Fail");
  document.write("<br> Remarks : Sorry");
}
////////////////////////////////////////////////////////////////////

// Q.7
const random = Math.floor(Math.random() * 10) + 1;
console.log(random)
var guessNum = parseInt(prompt("Guess the secret number."));
  if(guessNum++ === random) {
    alert("“Bingo! Correct answer”.");
  }
    if(guessNum === random) {
      alert("“Close enough to the correct answer”.");
    }
////////////////////////////////////////////////////////////////////

// Q.8
var divNum = prompt("Enter a number");
if(divNum % 3 == 0) {
  alert("The number is divisible by 3");
}
else {
  alert("The number is not divisible by 3")
}
////////////////////////////////////////////////////////////////////

// Q.9
var checkNum = prompt("Enter a number");
if(checkNum % 2 == 0) {
  alert("Number is  even");
}
else {
  alert("Number is  odd");
}
////////////////////////////////////////////////////////////////////

// Q.10
var temp = prompt("Enter Temperature");
if(temp > 40) {
  alert("“It is too hot outside.”");
}
else if(temp > 30) {
  alert("“The Weather today is Normal.”");
}
else if(temp > 20) {
  alert("“Today’s Weather is cool.”");
}
else if(temp > 10) {
  alert("“OMG! Today’s weather is so Cool.”");
}
//////////////////////////////////////////////////////////////////

// Q.11
var firstNum = parseInt(prompt("Enter a first number"));
var secondNum = parseInt(prompt("Enter a second number"));
var cal, ope;
var ope = prompt("Choose Any Operator: + | - | / | * ")
if(ope == '+') {
  cal = firstNum + secondNum;
  document.write("<br> Addition  of two numbers is: " + cal);
}
else if(ope == '-') {
  cal = firstNum - secondNum;
  document.write("<br> Subtraction  of two numbers is: " + cal);
}
else if(ope == '/') {
  cal = firstNum / secondNum;
  document.write("<br> Division  of two numbers is: " + cal);
}
else if(ope == '*') {
  cal = firstNum * secondNum;
  document.write("<br> Multiplication  of two numbers is: " + cal);
}
else {
  console.log("Invalid Input");
}
