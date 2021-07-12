/*
autor: Tomas Perez Ponisio
ejercicio: 10bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado;
	var descuento;
	var importeFinal;
	var descuentoPorcentaje;
	var mensaje;

	//Entrada
	importeIngresado = document.getElementById('txtIdImporte').value;
	importeIngresado = parseInt(importeIngresado);

	descuentoPorcentaje = prompt("Qué descuento le damos?", 25);
	descuentoPorcentaje = parseInt(descuentoPorcentaje);

	//Proceso
	descuento = importeIngresado * descuentoPorcentaje / 100;
	importeFinal = importeIngresado - descuento;

	//Salida
	mensaje = "El importe final es: $" + importeFinal + ", con un descuento de: $" + descuento;

	document.getElementById('txtIdResultado').value = mensaje;
}
