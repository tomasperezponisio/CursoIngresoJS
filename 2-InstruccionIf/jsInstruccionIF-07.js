/*
autor: Tomas Perez Ponisio
ejercicio: IF 07
*/

function mostrar()
{
	var edadIngresada;
	var estadoCivil;
	var mensaje;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivil = document.getElementById('estadoCivil').value;
	mensaje = "Es muy pequeño para NO ser soltero";
 
	if ( edadIngresada < 18 && estadoCivil != "Soltero" ) {
		alert(mensaje);
	}
}//FIN DE LA FUNCIÓN