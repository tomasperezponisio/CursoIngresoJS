/*
autor: Tomas Perez Ponisio
ejercicio: IF 01
*/

function mostrar()
{
	var mensaje;
	var edadIngresada;

	mensaje = "niña bonita";
	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	//tomo la edad  
	if ( edadIngresada == 15 ) {
		alert(mensaje);
	}
	
}//FIN DE LA FUNCIÓN