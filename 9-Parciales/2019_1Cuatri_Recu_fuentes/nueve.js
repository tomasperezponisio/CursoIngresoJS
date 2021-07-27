/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2020 Recu. Ejercicio 9
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var nota;
	var seguir;
	var varonesAprobadosCantidad;
	var contadorMenoresDeEdad;
	var acumuladorNotasMenoresDeEdad;
	var promedioNotasMenoresDeEdad;
	var contadorAdolescentes;
	var acumuladorNotasAdolescentes;
	var promedioNotasAdolescentes;
	var contadorAdultos;
	var acumuladorNotasAdultos;
	var promedioNotasAdultos;
	var contadorF;
	var contadorM;
	var acumuladorNotasF;
	var acumuladorNotasM;
	var promedioNotasF;
	var promedioNotasM;

	seguir = true;	
	varonesAprobadosCantidad = 0;
	contadorMenoresDeEdad = 0;
	promedioNotasMenoresDeEdad = 0;
	contadorAdolescentes = 0;
	contadorAdultos = 0;
	acumuladorNotasMenoresDeEdad = 0;
	acumuladorNotasAdolescentes = 0;
	acumuladorNotasAdultos = 0;
	contadorF = 0;
	contadorM = 0;
	acumuladorNotasF = 0;
	acumuladorNotasM = 0;
	promedioNotasF = 0;
	promedioNotasM = 0;

	while (seguir == true)
	{
		nombre = prompt("Ingrese el nombre");

		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);
		while (edad < 1 || edad > 99)
		{
			edad = prompt("Ingrese la edad correcta (1-99)");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese el sexo (f/m)");
		while (sexo != "f" & sexo != "m")
		{
			sexo = prompt("Ingrese el sexo correcto (f/m)");
		}

		nota = prompt("Ingrese la nota");
		nota = parseInt(nota);
		while (nota < 0 || nota > 10)
		{
			nota = prompt("Ingrese la nota correcta (0-10)");
			nota = parseInt(nota);
		}

		if (sexo == "m" && nota > 4)
		{
			varonesAprobadosCantidad++;
		}

		if (edad < 14)
		{
			contadorMenoresDeEdad++;
			acumuladorNotasMenoresDeEdad = acumuladorNotasMenoresDeEdad + nota;
		}
		else
		{
			if (edad < 18)
			{
				contadorAdolescentes++;
				acumuladorNotasAdolescentes = acumuladorNotasAdolescentes + nota;
			}
			else
			{	
				contadorAdultos++;
				acumuladorNotasAdultos = acumuladorNotasAdultos + nota;
			}
		}

		if (sexo == "f")
		{
			acumuladorNotasF = acumuladorNotasF + nota;
			contadorF++;
		}
		else
		{
			acumuladorNotasM = acumuladorNotasM + nota;
			contadorM++;	
		}

		seguir = confirm("Desea ingresar otro más?");
	}

	promedioNotasMenoresDeEdad = acumuladorNotasMenoresDeEdad / contadorMenoresDeEdad;
	promedioNotasAdolescentes = acumuladorNotasAdolescentes / contadorAdolescentes;
	promedioNotasAdultos = acumuladorNotasAdultos / contadorAdultos;
	promedioNotasF = acumuladorNotasF / contadorF;
	promedioNotasM = acumuladorNotasM / contadorM;	

	document.write("Aprobaron " + varonesAprobadosCantidad + " varones");
	document.write("<br>");
	document.write("El promedio de nota de los menores de edad es de: " + promedioNotasMenoresDeEdad);
	document.write("<br>");
	document.write("El promedio de nota de los adolescentes es de: " + promedioNotasAdolescentes);
	document.write("<br>");
	document.write("El promedio de nota de los adultos es de: " + promedioNotasAdultos);
	document.write("<br>");
	document.write("El promedio de nota de varones es de: " + promedioNotasM);
	document.write("<br>");
	document.write("El promedio de nota de las mujeres es de: " + promedioNotasF);
	document.write("<br>");

}
