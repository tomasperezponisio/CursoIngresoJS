/*
autor: Tomas Perez Ponisio
ejercicio: IF 05
*/

function mostrar()
{
	var mensaje;
	var edadIngresada;

	mensaje = "No sos adolescente";
	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	//tomo la edad  
	if ( edadIngresada < 13 || edadIngresada > 17) {
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN