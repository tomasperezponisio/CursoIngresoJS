/*
autor: Tomas Perez Ponisio
ejercicio: IF 10
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var mensaje;
	var nota;

	nota = Math.floor(Math.random() * 10)+1; 	
	
	if (nota >= 9) {
		mensaje = "Te sacaste un: " + nota + " // Excelente";
	}
	if (nota >= 4 && nota < 9) {
		mensaje = "Te sacaste un: " + nota + " // Aprobaste";
	}
	if (nota < 4) {
		mensaje = "Te sacaste un: " + nota + " // Vamos, la próxima se puede";
	}

	alert(mensaje);	

}//FIN DE LA FUNCIÓN