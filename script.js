let num1 = document .querySelector(".num1");
let op = document .querySelector(".op");
let num2 = document .querySelector(".num2");
let outputBox = document .querySelector(".outputBox");

document.querySelectorAll(".btn1").forEach((btn) => {
    btn.addEventListener("click", function () {
        let numSelected = this.value;
        console.log(numSelected);
        num1.value = num1.value  + numSelected;
    });
  });  

  document.querySelectorAll(".btn2").forEach((btn) => {
    btn.addEventListener("click", function () {
        let numSelected = this.value;
        console.log(numSelected);
        num2.value = num2.value  + numSelected;
    });
  });  

  document.querySelectorAll(".opBtn").forEach((btn) => {
    btn.addEventListener("click", function () {
        let opSelected = this.value;
        console.log(opSelected);
        op.value = opSelected;
    });
  });  

  document.querySelector(".answer").addEventListener("click", function () {
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);
    let operation = op.value;
    
    if (operation == "plus"){
        outputBox.value = value1 + value2;}
        
     else if (operation == "times"){
         outputBox.value = value1 * value2;}
    
     else if (operation == "minus"){
        outputBox.value = value1 - value2;}
        
    else if (operation == "divide"){
            outputBox.value = value1 / value2;}
            
  })

   
  
    


