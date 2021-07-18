/*
autor: Tomas Perez Ponisio
ejercicio: SWITCH 08
*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado) {
		case "Bariloche" :
		case "Mar del plata" :
		case "Ushuaia" : {
			mensaje = "Frío";		
			break;
		}case "Cataratas" : {
			mensaje = "Calor";			
			break;
		}
		default: {
			mensaje = "Seleccione un destino";
		}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN