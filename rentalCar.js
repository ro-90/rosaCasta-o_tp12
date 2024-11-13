let compacto=14000;
let mediano=17000;
let camioneta=28000;
 
let total=0;

function rentalCar(tipoDevehiculo,diaDeAlquiler ,sillaParaBebe){
    if(sillaParaBebe){
        total=(tipoDevehiculo+1200)*diaDeAlquiler;
      console.log("Estimado cliente:en base al tipo de vehiculo"+tipoDevehiculo+"alquilado,considerando los "+diaDeAlquiler+"dias utilizados,y sumando el monto del uso de silla para bebe por"+diaDeAlquiler+"dias,el monto total a pagar es de  $"+total)}
      else  {total=tipoDevehiculo*diaDeAlquiler;
        console.log("Estimado cliente:en base altipo de vehiculo"+tipoDevehiculo+"alquilado,considerando los "+diaDeAlquiler+"dias utilizados, el monto total a pargar es de $ ")}
      
     return total;}

   
    


console.log(rentalCar(mediano,4,));

  