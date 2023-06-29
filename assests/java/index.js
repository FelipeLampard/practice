//página1
document.getElementById("newImagen").onclick = changeImagen;

function changeImagen() {
  let imagen = document.getElementById("newImagen");
 
  if (imagen.style.border) {
    imagen.style.border = "";
  } else {
    imagen.style.border = "2px solid red";
  }
}
    
//página2
  
let pressButton = document.querySelector("#press");

function precioTotal() {
      let num1 = document.querySelector("#stick1").value;
      let num2 = document.querySelector("#stick2").value;
      let num3 = document.querySelector("#stick3").value;
      let num4 = document.querySelector("#stick4").value;
      
      let total = +num1 + +num2 + +num3 + +num4;
  
     if (total <= 10){
        document.querySelector("#totalSticker").innerHTML= "LLevas " + total ;
     } else {
        document.querySelector("#totalSticker").innerHTML= "Llevas demasiadas" ;
     }
      
     }    
     
 pressButton.addEventListener("click", precioTotal);     
          
  
 //página3
     
 function passClip() {
   let passing1 = document.getElementById("password1").value;
   let passing2 = document.getElementById("password2").value;
   let passing3 = document.getElementById("password3").value;
   
   if (passing1 === "9" && passing2 === "1" && passing3 === "1") {
     document.getElementById("seguridad").innerHTML = "Password 1 correcto";
   } else if (passing1 === "7" && passing2 === "1" && passing3 === "4") {
    document.getElementById("seguridad").innerHTML = "Password 2 correcto";
   } else { 
    document.getElementById("seguridad").innerHTML = "Password Incorrecta";
   }
 }



  
  
  

 



  
  

   
    









    
   
    