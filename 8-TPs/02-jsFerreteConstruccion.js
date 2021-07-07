/*
autor: Tomas Perez Ponisio
ejercicio: TP 2 - Ferrete Construcción
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;	
	var rectangulo;
	var alambre;
	var mensaje;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);

	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	rectangulo = (largo * 2) + (ancho * 2);

	alambre = rectangulo * 3;

	mensaje = "Necesitas " + alambre + " metros de alambre";

	alert(mensaje);

}

function Circulo () 
{
	var radio;
	var circunferencia;
	var alambre;
	var mensaje;

	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);

	circunferencia = 3.14 * 2 * radio;

	alambre = circunferencia * 3;

	mensaje = "Necesitas " + alambre + " metros de alambre";

	alert(mensaje);
	
}

function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var alambre;
	var cemento;
	var cal;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);

	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	area = largo * ancho;

	cemento = area * 2;

	cal = area * 3;

	mensaje = "Necesitas " + cemento + " bolsas de cemento y " + cal + " bolsas de cal";

	alert(mensaje);
	
}