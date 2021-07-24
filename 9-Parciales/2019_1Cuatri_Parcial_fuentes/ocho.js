/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2019 08
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
	var letraIngresada;
	var numeroIngresado;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var contadorPositivos;
	var sumaPositivos;
	var promedioPositivos;
	var sumaNegativos;
	var numeroMaximo;
	var letraDelMaximo;
	var numeroMinimo;
	var letraDelMinimo;
	var banderaDelPrimero;
	var controlWhile;
	var respuestaControl;
	var resto;

	banderaDelPrimero = true;
	controlWhile = true;
	contadorPares = 0;
	contadorImpares = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;

	while (controlWhile)
	{
		letraIngresada = prompt("Ingrese una letra");
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		while (numeroIngresado < -100 || numeroIngresado > 100)
		{
			numeroIngresado = prompt("Ingrese un número correcto, entre -100 y 100");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			letraDelMaximo = letraIngresada;
			letraDelMinimo = letraIngresada;
			banderaDelPrimero = false;
		}

		if (numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			letraDelMinimo = letraIngresada;
		}
		else
		{
			if (numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
				letraDelMaximo = letraIngresada;
			}
		}
		
		if (numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
		}

		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos ++;
		}

		if (numeroIngresado == 0)
		{
			contadorCeros ++;
		}

		resto = numeroIngresado % 2;
		if (resto == 0)
		{
			contadorPares ++;
		}
		else
		{
			contadorImpares ++;
		}

		respuestaControl = prompt("Desea continuar? si / no");
		if (respuestaControl == "no")
		{
			controlWhile = false;
		}
	}	

	promedioPositivos = sumaPositivos / contadorPositivos;

	document.write("Hay " + contadorPares + " números pares, hay " + contadorImpares + " números impares y hay " + contadorCeros + " ceros");
	document.write("<br>");
	document.write("El promedio de los números positivos es: " + promedioPositivos);
	document.write("<br>");
	document.write("La suma de los números negativos es: " + sumaNegativos);
	document.write("<br>");
	document.write("La letra del número máximo es la " + letraDelMaximo + " y la letra del mínimo es " + letraDelMinimo);	
	
}
