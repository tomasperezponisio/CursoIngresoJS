/*
al presionar el botón pedir
la cantidad de veces que quiero
repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	var cantidad;
	cantidad = prompt("ingrese el número de repeticiones");
	cantidad = parseInt(cantidad);

	var i; // variable de control
	for (i = 0; i < cantidad; i++)
	{
		document.write(i + "UTN FRA <br>");
	}

}