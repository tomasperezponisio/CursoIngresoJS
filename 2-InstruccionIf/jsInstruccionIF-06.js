function mostrar()
{
	//tomo la edad  
	if (txtIdEdad.value < 13) {
		alert("Sos niño");
	}
	if (txtIdEdad.value >= 13 && txtIdEdad.value <= 17) {
		alert("Sos adolescente");
	}
	if (txtIdEdad.value >= 18) {
		alert("Sos mayor de edad");
	}



}//FIN DE LA FUNCIÓN