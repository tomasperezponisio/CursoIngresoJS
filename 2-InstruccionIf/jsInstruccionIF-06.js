/*
autor: Tomas Perez Ponisio
ejercicio: IF 06
*/

function mostrar()
{
	var mensaje;
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	/*
	if ( edadIngresada < 13 ) {
		mensaje = "Sos niño";
	}
	if ( edadIngresada > 12 && edadIngresada < 18) {
		mensaje = "Sos adolescente";
	}
	if ( edadIngresada > 17 ) {
		mensaje = "Sos mayor de edad";
	}*/

	if ( edadIngresada > 17 )
	{
		mensaje = "Sos mayor de edad";
	}
	else
	{
		if ( edadIngresada < 13 )
		{
			mensaje = "Sos niño";
		}
		else
		{
			mensaje = "Sos adolescente";
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN