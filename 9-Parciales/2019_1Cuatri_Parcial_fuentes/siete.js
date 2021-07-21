/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2019 07
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250),
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/

function mostrar()
{
	var altura;
	var sexo;
	var contador;
	var sumaAlturas;
	var alturaMenor;
	var sexoDelBajito;
	var controlAlturaMenor;
	var cantidadMujeresAltas;
	var promedioAlturas;

	contador = 0;
	sumaAlturas = 0;
	cantidadMujeresAltas = 0;
	controlAlturaMenor = true;

	while (contador < 5)
	{
		contador ++;
		altura = prompt("Ingrese la altura (en cm) del jugador nro: " + contador);
		altura = parseInt(altura);		
		while (altura < 0 || altura > 250)
		{
			altura = prompt("Ingrese una altura válida, entre 0 y 250 cm" );
			altura = parseInt(altura);
		}
		sumaAlturas = sumaAlturas + altura; //voy sumando las alturas para sacar el promedio

		if (controlAlturaMenor) // bandera de control para la altura menor
		{
			alturaMenor = altura;
			controlAlturaMenor = false;
		}

		sexo = prompt("Ingrese el sexo (f / m) del jugador nro: " + contador);
		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese el sexo (f / m) del jugador nro: " + contador);
		}

		if (altura < alturaMenor) //voy guardando la altura menor y el sexo correspondiente
		{
			alturaMenor = altura;
			sexoDelBajito = sexo;
		}

		if (sexo == "f" && altura > 190) // voy contando las mujeres que midan mas de 190cm
		{
			cantidadMujeresAltas ++;
		}	

	}

	promedioAlturas = sumaAlturas / 5;
	mensaje = "El promedio de alturas es: " + promedioAlturas + ", la altura más baja es de: " + alturaMenor + " y es de sexo: " + sexoDelBajito + ", y hay " + cantidadMujeresAltas + " de mujeres que miden mas de 190cm";

	alert(mensaje);

}
