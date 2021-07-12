/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2019 03
Bienvenidos.
Pedir por prompt el precio y el porcentaje
de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
	var precioIngresado;
	var porcentajeDescuento;
	var descuentoCalculado;
	var precioFinal;
	var mensaje;

	//Entrada
	precioIngresado = prompt("Ingrese el precio");
	precioIngresado = parseInt(precioIngresado);

	porcentajeDescuento = prompt("Que descuento tiene?");
	porcentajeDescuento = parseInt(porcentajeDescuento);

	//Proceso
	descuentoCalculado = precioIngresado * porcentajeDescuento / 100;
	precioFinal = precioIngresado - descuentoCalculado;

	//Salida
	mensaje = "El precio ingresado fue $" + precioIngresado + ", con un descuento de " + porcentajeDescuento + "% queda en $" + precioFinal;
	document.getElementById('elPrecioFinal').value = mensaje;

}
