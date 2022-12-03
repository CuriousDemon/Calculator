//all variables

const Output1 = document.querySelector(".output1");
const Output2 = document.querySelector(".output2");
const Output3 = document.querySelector(".output3");
const One = document.querySelector(".one");
const Two = document.querySelector(".two");
const Three = document.querySelector(".three");
const Four = document.querySelector(".four");
const Five = document.querySelector(".five");
const Six = document.querySelector(".six");
const Seven = document.querySelector(".seven");
const Eight = document.querySelector(".eight");
const Nine = document.querySelector(".nine");
const Zero = document.querySelector(".zero");
const AC = document.querySelector(".AC");
const Delete = document.querySelector(".delete");
const Add = document.querySelector(".add");
const Minus = document.querySelector(".minus");
const Multiplier = document.querySelector(".multiplier");
const Division  = document.querySelector(".division");
const Equal = document.querySelector(".equal");
const Dot = document.querySelector(".dot");




//calculator variable

let a;
let b;
let variables = [];
let clicked = 0;
let num = 0;
let oparetor = "";
let result = "";
let res;



//calculator button declearation


One.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "1";  
        result = ""; 
    }
   
})


Two.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "2";   
        result = "";
    }
   
})

Three.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "3";  
        result = ""; 
    }
   
})

Four.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "4";   
        result = "";
    }
   
})

Five.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "5";   
        result = "";
    }
   
})

Six.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "6"; 
        result = "";  
    }
   
})

Seven.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "7";   
        result = "";
    }
   
})

Eight.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "8";  
        result = ""; 
    }
   
})

Nine.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "9";   
        result = "";
    }
   
})

Zero.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += "0";  
        result = ""; 
    }
   
})

Dot.addEventListener('click',()=>{
    if(num === 0){
        Output2.innerText = "";
        num++
    }
    if(clicked === 0 || clicked === 1){
        Output2.style.color = "black"
        Output2.innerText += ".";  
        result = ""; 
    }
   
})

Add.addEventListener('click',()=>{
    if(clicked === 0 && result != "something" ){
        variables.push(Number(Output2.innerText));
        Output1.innerText = Output2.innerText
        Output3.innerText = "+";
        Output2.innerText = ""
        // console.log(variables);
        oparetor = "add";
        clicked++
        
    }
    if(oparetor ==="minus" || oparetor === "multiplier" || oparetor === "division"){
        Output3.innerText = "+";
        oparetor = "add";
    }
   
})


Minus.addEventListener('click',()=>{
    if(clicked === 0 && result != "something" ){
        variables.push(Number(Output2.innerText));
        Output1.innerText = Output2.innerText
        Output3.innerText = "-";
        Output2.innerText = ""
        // console.log(variables);
        oparetor = "minus";
        clicked++
        
    }
    if(oparetor ==="add" || oparetor === "multiplier" || oparetor === "division"){
        Output3.innerText = "-";
        oparetor = "minus";
    }
   
})


Multiplier.addEventListener('click',()=>{
    if(clicked === 0 && result != "something" ){
        variables.push(Number(Output2.innerText));
        Output1.innerText = Output2.innerText
        Output3.innerText = "*";
        Output2.innerText = ""
        // console.log(variables);
        oparetor = "multiplier";
        clicked++
        
    }
    if(oparetor ==="add" || oparetor === "minus" || oparetor === "division"){
        Output3.innerText = "*";
        oparetor = "multiplier";
    }
   
})
Division.addEventListener('click',()=>{
    if(clicked === 0 && result != "something" ){
        variables.push(Number(Output2.innerText));
        Output1.innerText = Output2.innerText
        Output3.innerText = "/";
        Output2.innerText = ""
        // console.log(variables);
        oparetor = "division";
        clicked++
        
    }
    if(oparetor ==="add" || oparetor === "multiplier" || oparetor === "minus"){
        Output3.innerText = "/";
        oparetor = "division";
    }
   
})


//Calculator oparetor funtion

const Addition = (x,y)=>{
    return res = x + y;
}
const Subtraction = (x,y)=>{
    return res = x - y;
}
const Multiplication = (x,y)=>{
    return res = x * y;
}
const Divided = (x,y)=>{
    return res = x / y;
}


// Equal engin

Equal.addEventListener('click',()=>{
    if(oparetor === "add"){
        variables.push(Number(Output2.innerText));
        [a,b] = variables;
        Addition(a,b);
        Output2.style.color = "green"
        Output2.innerText = `Result = ${res}`
        Output1.innerText = "0"
        Output3.innerText = "Oparetor"
        clicked = 0
        num = 0
        variables = [];
        result = "something";
        oparetor = "";
    }
    if(oparetor === "minus"){
        variables.push(Number(Output2.innerText));
        [a,b] = variables;
        Subtraction(a,b);
        Output2.style.color = "green"
        Output2.innerText = `Result = ${res}`
        Output1.innerText = "0"
        Output3.innerText = "Oparetor"
        clicked = 0
        num = 0
        variables = [];
        result = "something";
        oparetor = "";
    }
    if(oparetor === "multiplier"){
        variables.push(Number(Output2.innerText));
        [a,b] = variables;
        Multiplication(a,b);
        Output2.style.color = "green"
        Output2.innerText = `Result = ${res}`
        Output1.innerText = "0"
        Output3.innerText = "Oparetor"
        clicked = 0
        num = 0
        variables = [];
        result = "something";
        oparetor = "";
    }
    if(oparetor === "division"){
        variables.push(Number(Output2.innerText));
        [a,b] = variables;
        Divided(a,b);
        Output2.style.color = "green"
        Output2.innerText = `Result = ${res}`
        Output1.innerText = "0"
        Output3.innerText = "Oparetor"
        clicked = 0
        num = 0
        variables = [];
        result = "something";
        oparetor = "";
    }
})


// Delete engin

Delete.addEventListener('click',()=>{
    if(result != "something"){
        Output2.style.color = "black";
        text = Output2.innerText;
        Output2.innerText = text.slice(0,text.length-1);
        oparetor = "";
        // console.log(text.slice(0,text.length-1))
    }
    if(result === "something" ){
        Output2.style.color = "black";
        text = Output2.innerText;
        Output2.innerText = text.slice(9)
        // console.log(text.slice(9))
        result = "";
        num++
    }
})


// All Clear engin

AC.addEventListener('click',()=>{
    Output2.style.color = "black"
    Output2.innerText = '0'
    Output1.innerText = "0"
    Output3.innerText = "Oparetor"
    clicked = 0
    num = 0
    variables = [];
    oparetor = "";
})

// console.log(One)