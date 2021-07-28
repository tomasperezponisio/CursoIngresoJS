/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2020 Ejercicio 2 

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  var producto;
  var cantidad;
  var precio;
  var seguir;
  var precioPrevio;
  var precioTotalArena;
  var precioTotalCal;
  var precioTotalCemento;
  var cantidadTotalArena;
  var cantidadTotalCal;
  var cantidadTotalCemento;
  var cantidadTotalTodos;
  var precioTotalSinDescuento;
  var precioFinalConDescuento;
  var descuentoPorcentaje;
  var descuento;
  var cantidadMaxima;
  var banderaCantidadMaxima;
  var productoConMasCantidad;
  var productoMasCaro;
  var precioMaximo;
  var banderaPrecioMaximo;
  
  seguir = true;
  precioTotalArena = 0;
  precioTotalCal = 0;
  precioTotalCemento = 0;
  cantidadTotalArena = 0;
  cantidadTotalCal = 0;
  cantidadTotalCemento = 0;
  cantidadTotalTodos = 0;
  banderaCantidadMaxima = true;
  banderaPrecioMaximo = true;

  while (seguir == true)
  {
    producto = prompt("Qué producto quiere comprar?");
    while (producto != "arena" && producto != "cal" && producto != "cemento")
    {
      producto = prompt("Qué producto quiere comprar? (arena / cal / cemento)");
    }

    cantidad = prompt("Cuantas bolsas quiere comprar?");
    cantidad = parseInt(cantidad);
    while (cantidad < 1)
    {
      cantidad = prompt("Cuantas bolsas quiere comprar? Ingrese una cantidad valida");
      cantidad = parseInt(cantidad);
    }

    precio = prompt("Cuál es el precio por bolsa?");
    precio = parseInt(precio);
    while (precio < 0)
    {
      precio = prompt("Cuál es el precio por bolsa? Ingrese un precio mayor a 0");
      precio = parseInt(precio);
    }

    switch (producto)
    {
      case "arena":
        precioPrevio = cantidad * precio;
        precioTotalArena = precioTotalArena + precioPrevio;
        cantidadTotalArena = cantidadTotalArena + cantidad;
        break;
      
      case "cal":
        precioPrevio = cantidad * precio;
        precioTotalCal = precioTotalCal + precioPrevio;
        cantidadTotalCal = cantidadTotalCal + cantidad;
        break;

      case "cemento":
        precioPrevio = cantidad * precio;
        precioTotalCemento = precioTotalCemento + precioPrevio;
        cantidadTotalCemento = cantidadTotalCemento + cantidad;
        break;
    }

    if (banderaCantidadMaxima == true)
    {
      cantidadMaxima = cantidad;
      productoConMasCantidad = producto;
      banderaCantidadMaxima = false;
    }
    if (cantidad > cantidadMaxima)
    {
      cantidadMaxima = cantidad;
      productoConMasCantidad = producto;
    }

    if (banderaPrecioMaximo == true)
    {
      precioMaximo = precio;
      productoMasCaro = producto;
      banderaPrecioMaximo = false;
    }
    if (precio > precioMaximo)
    {
      precioMaximo = precio;
      productoMasCaro = producto;
    }

    seguir = confirm("Desea ingresar otro producto?");
  }

  //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  
  precioTotalSinDescuento = precioTotalArena + precioTotalCal + precioTotalCemento;
  cantidadTotalTodos = cantidadTotalArena + cantidadTotalCal + cantidadTotalCemento;

  if (cantidadTotalTodos > 10 && cantidadTotalTodos < 31)
  {
    descuentoPorcentaje = 15;
  } 
  else
  {
    if (cantidadTotalTodos > 30)
    {
      descuentoPorcentaje = 25;
    }
    else
    {
      descuentoPorcentaje = 0;
    }
  }
  // a) El importe total a pagar , bruto sin descuento y...
  // b) el importe total a pagar con descuento(solo si corresponde)
  // d) Informar el tipo con mas cantidad de bolsas.
  // f) El tipo mas caro

  descuento = precioTotalSinDescuento * descuentoPorcentaje / 100;
  precioFinalConDescuento = precioTotalSinDescuento - descuento;

  //document.write("cantidadTotalArena: " + cantidadTotalArena + " || cantidadTotalCal: " + cantidadTotalCal + " || cantidadTotalCemento: " + cantidadTotalCemento);
  //document.write("<br>");
  //document.write("precioTotalArena: " + precioTotalArena + " || precioTotalCal: " + precioTotalCal + " || precioTotalCemento: " + precioTotalCemento);
  //document.write("<br>");
  document.write("Importe total bruto: " + precioTotalSinDescuento + " || descuento del (" + descuentoPorcentaje +  "%): " + descuento + " || precio final con descuento: " + precioFinalConDescuento);
  document.write("<br>");
  document.write("El producto con más cantidad fue: " + productoConMasCantidad + " con " + cantidadMaxima + " bolsas");
  document.write("<br>");
  document.write("El producto más caro fue: " + productoMasCaro + " y costó " + precioMaximo);
  
  
}
