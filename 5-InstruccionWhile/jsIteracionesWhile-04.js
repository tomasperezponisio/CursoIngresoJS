/*
autor: Tomas Perez Ponisio
ejercicio: WHILE 04
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	parseInt(numeroIngresado);	

	while (numeroIngresado < 0 || numeroIngresado > 10)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		parseInt(numeroIngresado);	
	}	
}//FIN DE LA FUNCIÓN