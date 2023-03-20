  let nombreDelCliente
  let campeon1, campeon2
  let menuCampeon
  let i
  let precioTotal=0

  
  nombreDelCliente=prompt("ingresa tu nombre")
  saludarConNombre(nombreDelCliente)
  for(i=0; i<10000; i++){
  campeon1=prompt ("que campeon te gusta? \n1 Jinx $1500 \n2 miss$4800 \n3 jax$3500 \n4 Salir y ver total");

  if(campeon1=="1"){
    precioTotal+= 1500;
    alert ("Elegiste jinx el precio es de $1500 ve el total de tu compra al salir")
  }
  else if(campeon1=="2"){
    precioTotal+= 4800;
    alert ("Elegiste Miss Fortune el precio es de $4800 ve el total de tu compra al salir")
  }
  else if(campeon1=="3"){
    precioTotal+= 3500;
    alert ("Elegiste Jax el precio es de $3500 ve el total de tu compra al salir")
  }

  else if(campeon1=="4"){
    mostrarPrecioFinal()
  break}

  else {
    alert ("No elegiste una opcion valida")
  }
  }



function mostrarPrecioFinal(){
    alert("El total es de" + precioTotal)
  }


function saludarConNombre(nombre) {
    alert ("Bienvenid@" + " " + nombre);
}
