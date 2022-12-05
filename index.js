var fName = prompt("Ismingizni kiriting!");
var mass = Number(prompt (`${fName} Assalomu aleykum kilogramizni kiriting (kg)`));
var height = Number(prompt (`${fName} boyingizni sm va metrda olchab kriting (1.8 shaklda)`));
var BMI = mass / (height * height); 

console.log (BMI);
let p=document.querySelector(".underweight");
let p2=document.querySelector(".healthy__weight");
let p3=document.querySelector(".at__risk__of__overweight");
let p4=document.querySelector(".obesity");

if (BMI < 18.4) {
    p.innerHTML=`${fName} sizdi juda kam kilogram  (Underweight)`;
    p2.innerHTML="";
    p3.innerHTML="";
    p4.innerHTML="";
} 
else if (BMI>18.5 && BMI<=25 ) {
  p2.innerHTML=`${fName} siz soglomsiz (normal)`;
  p.innerHTML="";
  p3.innerHTML="";
  p4.innerHTML="";
}
else if (BMI>25.1 && BMI<=30 ) {
  p3.innerHTML=`${fName} sizda keraksiz kilogram bor`;
  p.innerHTML="";
  p2.innerHTML="";
  p4.innerHTML="";
}

else {
  p4.innerHTML=`${fName} siz semizsiz ozishni maslahat beramiz`;
  p.innerHTML="";
  p2.innerHTML="";
  p3.innerHTML="";
}
  

 


  







