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
	var contadorTemperaturasPares;
	var paisConMenosHabitantes;
	var contadorPaisesCalurosos;
	var seguir;
	var promedioHabitantes;
	var contadorPaises;
	var totalDeHabitantes;
	var paisMasFrio;
	var banderaHabitantes;
	var banderaTemperatura;

	contadorTemperaturasPares = 0;
	contadorPaisesCalurosos = 0;
	contadorPaises = 0;
	totalDeHabitantes = 0;
	seguir = true;
	banderaHabitantes = true;
	banderaTemperatura = true;


	while (seguir == true)
	{
		paisIngresado = prompt("Ingrese un país"); // pido ingreso de pais
		cantidadDeHabitantes = prompt("Ingrese la cantidad de habitantes (en millones)");
		cantidadDeHabitantes = parseInt(cantidadDeHabitantes);
		while (cantidadDeHabitantes < 1 || cantidadDeHabitantes > 7000) // valido la cantidad de habitantes
		{
			cantidadDeHabitantes = prompt("Ingrese la cantidad de habitantes (en millones, entre 1 y 7000)"); // valido cantidad de habitantes
			cantidadDeHabitantes = parseInt(cantidadDeHabitantes);
		}
		temperaturaIngresada = prompt("Ingrese la temperatura mínima del país"); // pido ingreso de temperatura
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while (temperaturaIngresada < -50 || temperaturaIngresada > 50) // valido la temperatura
		{
			temperaturaIngresada = prompt("Ingrese la temperatura mínima del país, entre -50 y 50");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}

		if (temperaturaIngresada % 2 == 0) // contador para temperaturas pares
		{
			contadorTemperaturasPares++;
		}

		if (banderaHabitantes == true) // bandera para guardar el minimo de habitantes y el pais correspondiente
		{
			cantidadDeHabitantesMenor = cantidadDeHabitantes;
			paisConMenosHabitantes = paisIngresado;
			banderaHabitantes = false;
		}
		else
		{
			if (cantidadDeHabitantes < cantidadDeHabitantesMenor) // voy guardando el pais con menos habitantes
			{
				cantidadDeHabitantesMenor = cantidadDeHabitantes;
				paisConMenosHabitantes = paisIngresado;
			}
		}	

		if (temperaturaIngresada > 40) // contador para paises con temperaturas mayores a 40
		{
			contadorPaisesCalurosos++;
		}

		if (banderaTemperatura == true) // bandera para la temperatura minima
		{
			temperaturaMinima = temperaturaIngresada;
			paisMasFrio = paisIngresado;
			banderaTemperatura = false;
		}
		else
		{
			if (temperaturaIngresada < temperaturaMinima) // voy guardando la temperatura minima y el pais mas frio
			{
				temperaturaMinima = temperaturaIngresada;
				paisMasFrio = paisIngresado;
			}
		}		

		totalDeHabitantes = totalDeHabitantes + cantidadDeHabitantes; // voy guardando el total de habitantes para sacar el promedio
		contadorPaises++; // voy contando los paises ingresados
		seguir = confirm("Desea continuar?");
	}

	promedioHabitantes = totalDeHabitantes / contadorPaises; //saco el promedio de habitantes

	document.write("a) Hay " + contadorTemperaturasPares + " temperaturas pares");
	document.write("<br>");
	document.write("b) El país con menos habitantes es: " + paisConMenosHabitantes);
	document.write("<br>");
	document.write("c) Hay " + contadorPaisesCalurosos + " paises que superan los 40 grados");
	document.write("<br>");
	document.write("d) El promedio de habitantes es de: " + promedioHabitantes);
	document.write("<br>");
	document.write("e) La temperatura más baja fue de: " + temperaturaMinima + " y es de " + paisMasFrio);
	document.write("<br>");

}
