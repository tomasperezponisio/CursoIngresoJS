/*
autor: Tomas Perez Ponisio
ejercicio: WHILE 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	var resto;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	diferenciaPositivosNegativos = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt('Ingrese un número');
		numeroIngresado = parseInt(numeroIngresado);

		resto = numeroIngresado % 2;

		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos ++;
		}
		else
		{
			if (numeroIngresado < 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				contadorNegativos ++;
			}
			else
			{
				contadorCeros ++;
			}
		}

		if (resto == 0)
		{
			contadorPares ++;
		}
		
		respuesta = prompt("desea continuar? si / no");
	}//fin del while

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;

	document.write("Hay " + contadorNegativos + " negativos, la suma es :" + sumaNegativos + ", y el promedio es: " + promedioNegativos);
	document.write("<br>");
	document.write("Hay " + contadorPositivos + " positivos, la suma es :" + sumaPositivos + ", y el promedio es: " + promedioPositivos);
	document.write("<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos);
	document.write("<br>");
	document.write("Hay " + contadorCeros + " ceros, y hay " + contadorPares + " números pares");
}//FIN DE LA FUNCIÓN