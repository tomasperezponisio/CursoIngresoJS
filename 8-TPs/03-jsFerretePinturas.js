/*
autor: Tomas Perez Ponisio
ejercicio: TP 3 - Ferrete Pinturas
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFarenheit;
	var temperaturaCelsius;
	var mensaje;

	temperaturaFarenheit = document.getElementById('txtIdTemperatura').value;
	temperaturaFarenheit = parseInt(temperaturaFarenheit);

	temperaturaCelsius = (temperaturaFarenheit - 32) * 5 / 9;

	mensaje = temperaturaFarenheit + " Farenheit son " + temperaturaCelsius + " centígrados";

	alert(mensaje);	
}

function CentigradosFahrenheit () 
{
	var temperaturaFarenheit;
	var temperaturaCelsius;
	var mensaje;

	temperaturaCelsius = document.getElementById('txtIdTemperatura').value;
	temperaturaCelsius = parseInt(temperaturaCelsius);

	temperaturaFarenheit = (temperaturaCelsius * 9 / 5) + 32;

	mensaje = temperaturaCelsius + " centígrados son " + temperaturaFarenheit + " Farenheit";

	alert(mensaje);		
}
