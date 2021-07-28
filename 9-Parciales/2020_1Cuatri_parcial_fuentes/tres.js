/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2020 Ejercicio 3

En el ingreso a un viaje en avion nos solicitan nombre , edad,
sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var seguir;
	var temperaturaMaxima;
	var nombreTemperaturaMaxima;
	var banderaTemperaturaMaxima;
	var contadorMayoresDeEdadViudos;
	var cantidadHombresSolterosOViudos;
	var cantidadTerceraEdadConFiebre;
	var cantidadSolteros;
	var sumaEdadSolteros;
	var promedioEdadHombresSolteros;

	seguir = true;
	banderaTemperaturaMaxima = true;
	contadorMayoresDeEdadViudos = 0;
	cantidadHombresSolterosOViudos = 0;
	cantidadTerceraEdadConFiebre = 0;
	promedioEdadHombresSolteros = 0;
	cantidadSolteros = 0;
	sumaEdadSolteros = 0;
	promedioEdadHombresSolteros = 0;

	while(seguir == true)
	{
		nombre = prompt("Ingrese nombre de pasajero");
		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);
		while(edad < 1 || edad > 110)
		{
			edad = prompt("Ingrese una edad valida, 1-110");
			edad = parseInt(edad);
		}
		sexo = prompt("Ingrese el sexo");
		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese el sexo correcto, f/m");
		}
		estadoCivil = prompt("Ingrese estado civil");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Ingrese estado civil correcto, soltero/casado/viudo");
		}
		temperatura = prompt("Ingrese la temperatura");
		temperatura = parseInt(temperatura);
		while (temperatura < 35 || temperatura > 45)
		{
			temperatura = prompt("Ingrese la temperatura correcta, 35-45");
			temperatura = parseInt(temperatura);
		}

		if (banderaTemperaturaMaxima == true)
		{
			temperaturaMaxima = temperatura;
			nombreTemperaturaMaxima = nombre;
			banderaTemperaturaMaxima = false;
		}
		if (temperatura > temperaturaMaxima)
		{
			nombreTemperaturaMaxima = nombre;
			temperaturaMaxima = temperatura;
		}

		if (edad > 18 && estadoCivil == "viudo")
		{
			contadorMayoresDeEdadViudos++;
		}

		if (sexo == "m")
		{
			if(estadoCivil == "soltero" || estadoCivil == "viudo")
			{
				cantidadHombresSolterosOViudos++;
			}
		}

		if (edad > 60)
		{
			if (temperatura > 38)			
			{
				cantidadTerceraEdadConFiebre++;
			}
		}

		if (estadoCivil == "soltero")
		{
			cantidadSolteros++;
			sumaEdadSolteros = sumaEdadSolteros + edad;
		}

		seguir = confirm("Desea agregar otro pasajero?");
	}

	promedioEdadHombresSolteros = sumaEdadSolteros / cantidadSolteros ;

	document.write("El nombre de la persona con mayor temperatura es: " + nombreTemperaturaMaxima + " y tuvo " + temperaturaMaxima +  " grados");
  	document.write("<br>");
	document.write("Cantidad de mayores de edad viudos: " + contadorMayoresDeEdadViudos);
  	document.write("<br>");
	document.write("Cantidad de hombres solteros o viudos: " + cantidadHombresSolterosOViudos);
  	document.write("<br>");
	document.write("Cantidad de mayores de 60 años con mas de 38 grados: " + cantidadTerceraEdadConFiebre);
  	document.write("<br>");
	document.write("Promedio de edad de los solteros: " + promedioEdadHombresSolteros);
  	document.write("<br>");
}
