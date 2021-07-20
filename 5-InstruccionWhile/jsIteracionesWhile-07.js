/*
autor: Tomas Perez Ponisio
ejercicio: WHILE 07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador = 0;
	acumulador = 0;
	respuesta = 'si';

	while(respuesta == 'si')
	{
		numeroIngresado = prompt('Ingrese un número');
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador ++;

		respuesta = prompt("Desea ingresar otro número? si / no");
	}

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador / contador;
}//FIN DE LA FUNCIÓN