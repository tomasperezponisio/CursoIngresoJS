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
	estadoCivil = document.getElementById('estadoCivil').value;
	mensaje = "Es muy pequeño para NO ser soltero";

	//tomo la edad  
	if ( edadIngresada <= 17 && estadoCivil != "Soltero" ) {
		alert(mensaje);
	}
}//FIN DE LA FUNCIÓN