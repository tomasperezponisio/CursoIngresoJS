/*
autor: Tomas Perez Ponisio
ejercicio: IF 02
*/

function mostrar()
{
	var mensaje;
	var edadIngresada;

	mensaje = "Sos mayor de edad";
	edadIngresada = document.getElementById('txtIdEdad').value;

	//tomo la edad  
	if ( edadIngresada >= 18 ) {		
		alert(mensaje);
	}
	
}//FIN DE LA FUNCIÓN