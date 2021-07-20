/*
autor: Tomas Perez Ponisio
ejercicio: WHILE 08
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	
	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	while(respuesta == 'si')
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado < 0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		else
		{
			sumaPositivos = sumaPositivos + numeroIngresado; // incluyo al 0
		}
		contador ++; // no está en uso

		respuesta = prompt('Desea ingresar otro número? si / no');
	}

	document.getElementById('txtIdSuma').value = "La suma de los números positivos es: " + sumaPositivos;
	document.getElementById('txtIdProducto').value = "El producto de los números negativos es: " + multiplicacionNegativos;

}//FIN DE LA FUNCIÓN