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
	edadIngresada = parseInt(edadIngresada);

	//tomo la edad  
	if ( edadIngresada > 12 && edadIngresada < 18 ) {
		alert(mensaje);
	}
	
}//FIN DE LA FUNCIÓN