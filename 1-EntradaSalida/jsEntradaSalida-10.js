/*
autor: Tomas Perez Ponisio
ejercicio: 10bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;
	var descuentoPorcentaje;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);

	descuentoPorcentaje = prompt("Qué descuento le damos?", 25);

	descuento = importe * descuentoPorcentaje / 100;
	resultado = importe - descuento;

	document.getElementById('txtIdResultado').value = resultado;
}
