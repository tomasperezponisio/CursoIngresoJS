/*
autor: Tomas Perez Ponisio
ejercicio: IF 03
*/

function mostrar()
{
	var mensaje;
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada;

	//tomo la edad  
	if ( edadIngresada > 17 )
	{
		mensaje = "Sos mayor de edad";
	}
	else
	{
		mensaje = "Sos menor de edad";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN