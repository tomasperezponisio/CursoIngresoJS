/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2019 01
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios
para un triángulo equilátero por prompt y que muestre
el perímetro por alert.
*/
function mostrar()
{
	var ladoIngresado;
	var perimetro;
	var mensaje;

	//Entrada
	ladoIngresado = prompt("Ingrese el lado del triangulo");
	ladoIngresado = parseInt(ladoIngresado);

	//Proceso
	perimetro = ladoIngresado * 3;

	//Salida
	mensaje = "El perimetro de un triangulo de lado " + ladoIngresado + " es igual a " + perimetro;
	alert(mensaje);

}
