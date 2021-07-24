/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2019 09
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/
function mostrar()
{
	var paisIngresado;
	var cantidadDeHabitantes;
	var temperaturaIngresada;
	var cantidadDeHabitantesMenor;
	var temperaturaMinima;
	var paisMasFrio;
	var temperaturaMaxima;
	var contadorTemperaturasPares;
	var paisConMenosHabitantes;
	var contadorPaisesCalurosos;
	var seguir;
	var promedioHabitantes;
	var contadorPaises;
	var totalDeHabitantes;
	var paisMasFrio;

	contadorTemperaturasPares = 0;
	contadorPaisesCalurosos = 0;
	contadorPaises = 0;
	seguir = true;

	while (seguir == true)
	{
		paisIngresado = prompt("Ingrese un país");
		cantidadDeHabitantes = prompt("Ingrese la cantidad de habitantes (en millones)");
		cantidadDeHabitantes = parseInt(cantidadDeHabitantes);
		while (cantidadDeHabitantes < 1 || cantidadDeHabitantes > 7000)
		{
			cantidadDeHabitantes = prompt("Ingrese la cantidad de habitantes (en millones, entre 1 y 7000)");
			cantidadDeHabitantes = parseInt(cantidadDeHabitantes);
		}
		temperaturaIngresada = prompt("Ingrese la temperatura mínima del país");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while (temperaturaIngresada < -50 || temperaturaIngresada > 50)
		{
			temperaturaIngresada = prompt("Ingrese la temperatura mínima del país, entre -50 y 50");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}

		if (temperaturaIngresada % 2 == 0)
		{
			contadorTemperaturasPares++;
		}

		if (cantidadDeHabitantes < cantidadDeHabitantesMenor || contadorPaises == 0)
		{
			cantidadDeHabitantesMenor = cantidadDeHabitantes;
			paisConMenosHabitantes = paisIngresado;
		}

		if (temperaturaIngresada > temperaturaMaxima || contadorPaises == 0)
		{
			temperaturaMaxima = temperaturaIngresada;
			contadorPaisesCalurosos++;
		}
		if (temperaturaIngresada < temperaturaMinima || contadorPaises == 0)
		{
			temperaturaMinima = temperaturaIngresada;
			paisMasFrio = paisIngresado;
		}

		totalDeHabitantes = totalDeHabitantes + cantidadDeHabitantes;
		contadorPaises++;
		seguir = confirm("Desea continuar?")
	}

	promedioHabitantes = totalDeHabitantes / contadorPaises;

	document.write("a) Hay " + contadorTemperaturasPares + " temperaturas pares");
	document.write("<br>");
	document.write("b) El país con menos habitantes es: " + paisConMenosHabitantes);
	document.write("<br>");
	document.write("c) Hay " + contadorPaisesCalurosos + " paises que superan los 40 grados");
	document.write("<br>");
	document.write("d) xxxxxxxxxxxx");
	document.write("<br>");
	document.write("e) La temperatura más baja fue de: " + temperaturaMinima + " y es de " + paisMasFrio);
	document.write("<br>");

}
