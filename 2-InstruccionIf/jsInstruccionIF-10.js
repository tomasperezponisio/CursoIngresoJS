/*
autor: Tomas Perez Ponisio
ejercicio: IF 10
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var mensaje;
	var nota;

	nota = Math.floor(Math.random() * 10) + 1; 	
	
	if (nota > 8)
	{
		mensaje = "Te sacaste un: " + nota + " // Excelente";
	}
	else
	{
		if (nota > 3)
		{
			mensaje = "Te sacaste un: " + nota + " // Aprobaste";
		}
		else
		{
			mensaje = "Te sacaste un: " + nota + " // Vamos, la próxima se puede";	
		}
	}
		
	alert(mensaje);	

}//FIN DE LA FUNCIÓN