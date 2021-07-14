/*
autor: Tomas Perez Ponisio
ejercicio: IF 09
*/

function mostrar()
{
	var mensaje;
	var numeroGenerado;
	var minimo;
	var maximo;

	minimo = 1;
	maximo = 10;
	
	numeroGenerado = Math.floor(Math.random() * maximo) + minimo;
	mensaje = "Salió el: " + numeroGenerado;

	//Genero el número RANDOM entre 1 y 10 
	alert(mensaje);	

}//FIN DE LA FUNCIÓN