/*
autor: Tomas Perez Ponisio
ejercicio: IF 08
*/

function mostrar()
{
	var edadIngresada;
	var estadoCivil;
	var mensaje;

	edadIngresada = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;
	mensaje = "Es soltero y no es menor";

	//tomo la edad  
	if ( edadIngresada > 17 && estadoCivil == "Soltero" ) {
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN