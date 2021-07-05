function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = Math.floor(Math.random() * 10)+1; 
	if (nota >= 9) {
		alert("Te sacaste un: " + nota + " // Excelente");
	}
	if (nota >= 4 && nota < 9) {
		alert("Te sacaste un: " + nota + " // Aprobaste");
	}
	if (nota < 4) {
		alert("Te sacaste un: " + nota + " // Vamos, la próxima se puede");
	}
	

}//FIN DE LA FUNCIÓN