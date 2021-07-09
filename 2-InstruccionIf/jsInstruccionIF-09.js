/*
autor: Tomas Perez Ponisio
ejercicio: IF 09
*/

function mostrar()
{
	var mensaje;
	var numeroGenerado;

	numeroGenerado = Math.floor(Math.random() * 10)+1;
	mensaje = "Salió el: " + numeroGenerado;

	//Genero el número RANDOM entre 1 y 10 
	alert(mensaje);	

}//FIN DE LA FUNCIÓN