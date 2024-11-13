

let CarneALaParrilla = 1800;
let pollo = 1500;
let vegetariana = 1200;
let total = 0;

function Callback(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
   total = total + tipoDeHamburguesa;
   if (jamon) {
      total = total+ 30
   }
   if (queso) {
      total = total + 25
   }
   if (salsaDeTomate) {
      total = total + 5
   }
   if (mayonesa) {
      total = total + 5
   }
   if (mostaza) {
      total = total + 5
   }
   if (tomate) {
      total = total + 15
   }
   if (lechuga) {
      total = total + 10
   }
   if (cebolla) {
      total = total + 10
   }

   return total;
}

//console.log(Callback(CarneALaParrilla,false, true, true, true, true, true, false, true));
//console.log(Callback(pollo,true,false,true,true,true,true,true,false));
//console.log(Callback(vegetariana,true,true,true,true,true,true,true,true));

function fastFood(nombreDelUsuario,apellidoDelUsuario,total ){
   
   console.log("Estimado"+nombreDelUsuario+apellidoDelUsuario +"el monto total a pagar es de :$"+total)
   return fastFood

}
 // console.log(fastFood("Daniel","fuentes",(Callback(CarneALaParrilla,false,true,true,true,true,true,false,true))));