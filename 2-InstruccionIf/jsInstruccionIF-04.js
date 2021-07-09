/*
autor: Tomas Perez Ponisio
ejercicio: IF 04
*/

function mostrar()
{
	var mensaje;
	var edadIngresada;

	mensaje = "Sos adolescente";
	edadIngresada = document.getElementById('txtIdEdad').value;

	//tomo la edad  
	if ( edadIngresada >= 13 && edadIngresada <= 17 ) {
		alert(mensaje);
	}
	
}//FIN DE LA FUNCIÓN