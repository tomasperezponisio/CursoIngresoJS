/*
autor: Tomas Perez Ponisio
ejercicio: IF 03
*/

function mostrar()
{
	var mensaje;
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;

	//tomo la edad  
	if ( edadIngresada >= 18 ) {
		mensaje = "Sos mayor de edad";
	}else{
		mensaje = "Sos menor de edad";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN